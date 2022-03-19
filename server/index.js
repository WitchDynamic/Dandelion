import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import cors from "cors";
import querystring from "querystring";
import request from "request";

const app = express();
dotenv.config();
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});

/* Routes */

app.get("/", function (req, res) {
  console.log("helo!!");
  res.send("Hello world!");
});

var redirect_uri = "http://localhost:5000/callback";

app.get("/login", function (req, res) {
  res.redirect(
    "https://accounts.spotify.com/authorize?" +
      querystring.stringify({
        response_type: "code",
        client_id: process.env.CLIENT_ID,
        scope:
          "streaming user-read-private user-read-playback-state user-modify-playback-state user-read-email user-library-read user-library-modify user-top-read",
        redirect_uri: redirect_uri,
        //show_dialog: true,
      })
  );
});

app.get("/callback", function (req, res) {
  var code = req.query.code || null;
  var authOptions = {
    url: "https://accounts.spotify.com/api/token",
    form: {
      code: code,
      redirect_uri: redirect_uri,
      grant_type: "authorization_code",
    },
    headers: {
      Authorization:
        "Basic " +
        Buffer.from(
          process.env.CLIENT_ID + ":" + process.env.CLIENT_SECRET
        ).toString("base64"),
    },
    json: true,
  };

  request.post(authOptions, function (error, response, body) {
    if (!error && response.statusCode === 200) {
      var access_token = body.access_token,
        refresh_token = body.refresh_token,
        expires_in = body.expires_in;

      // pass the token to the browser to make requests from there
      res.redirect(
        "http://localhost:3000/dashboard/#" +
          querystring.stringify({
            access_token: access_token,
            refresh_token: refresh_token,
            expires_in: expires_in,
          })
      );
    } else {
      console.log(error);
      // If the user does not accept your request or if an error has occurred
      res.redirect(
        "http://localhost:3000/#" +
          querystring.stringify({
            error: "invalid_token",
          })
      );
    }
  });
});

app.post("/refresh_token", function (req, res) {
  var { refresh_token } = req.body;
  var authOptions = {
    url: "https://accounts.spotify.com/api/token",
    headers: {
      Authorization:
        "Basic " +
        Buffer.from(
          process.env.CLIENT_ID + ":" + process.env.CLIENT_SECRET
        ).toString("base64"),
    },
    form: {
      grant_type: "refresh_token",
      refresh_token: refresh_token,
    },
    json: true,
  };

  request.post(authOptions, function (error, response, body) {
    if (!error && response.statusCode === 200) {
      const { access_token, expires_in } = body;
      res.send({
        access_token: access_token,
        expires_in: expires_in,
      });
    } else {
      // Possible refresh_token expired
      res.redirect(
        "http://localhost:3000/#" +
          querystring.stringify({
            error: "invalid_refresh_token",
          })
      );
    }
  });
});

app.post("/get_user", function (req, res) {
  const { accessToken } = req.body;
  var options = {
    url: "https://api.spotify.com/v1/me",
    headers: { Authorization: "Bearer " + accessToken },
    json: true,
  };

  request.get(options, function (error, response, body) {
    res.send(body);
  });
});
