# NgxRetro

Enabling teams to run their retrospectives for free and on-prem. This application uses the Enterprise GitHub API as the backend; so you can run this application entirely on GitHub Pages &mdash; behind your firewall. 🔥

<img src="/images/portfolio/ngx-retro/image-1.png" alt="hero-image" />

While this allows you to host your retro board "for free" (minus the enterprise license that you're already spending on), it does come with some disadvantages.

1. You don't know who's making the request (it is completely anonymous).
2. Access can be "faked" easily, e.g. people can spoof themselves into owning a board
3. It exposes any GitHub Access Tokens to the build. So, in theory, someone can reverse-engineer your Access Token.
4. Data might be overwritten (since GitHub API isn't a database it technically can have some data loss.)

If none of that matters to you - by all means use this application as it comes "out-of-the-box" 🎉🎊

If you don't like the pitfalls of the default `ngx-retro` application, you can easily substitute out the `github.service.ts` with your own REST API. In fact, we have a simple one ready to go called `go-retro`. Feel free to [check it out here](https://github.com/marcellosabino/go-retro).
