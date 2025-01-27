export const googleAuthUrl = () => {
  const rootUrl = "https://accounts.google.com/o/oauth2/v2/auth";

  const options = {
    redirect_uri: "http://localhost:3000/api/google/auth",
    client_id:
      "106858510323-r0dtovbobq72agcrv3udcn8v7ieppi2o.apps.googleusercontent.com",
    access_type: "offline",
    response_type: "code",
    prompt: "none",
    scope: [
      "https://www.googleapis.com/auth/userinfo.profile",
      "https://www.googleapis.com/auth/userinfo.email",
    ].join(" "),
  };

  const qs = new URLSearchParams(options);

  return `${rootUrl}?${qs.toString()}`;
};

export const googleSheetsUrl = (email: string) => {
  const rootUrl = "https://accounts.google.com/o/oauth2/v2/auth";

  const options = {
    redirect_uri: "http://localhost:3000/api/google/auth",
    client_id:
      "106858510323-r0dtovbobq72agcrv3udcn8v7ieppi2o.apps.googleusercontent.com",
    access_type: "offline",
    response_type: "code",
    login_hint: email,
    include_granted_scopes: "true",
    scope: [
      "https://www.googleapis.com/auth/drive",
      "https://www.googleapis.com/auth/spreadsheets",
      "https://www.googleapis.com/auth/drive.readonly",
      "https://www.googleapis.com/auth/drive.file",
      "https://www.googleapis.com/auth/spreadsheets.readonly",
    ].join(" "),
    state: "sheets_permission",
  };

  const qs = new URLSearchParams(options);

  return `${rootUrl}?${qs.toString()}`;
};
