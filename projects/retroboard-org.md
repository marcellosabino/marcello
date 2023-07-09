# RetroBoard.org

Your free and easy-to-use retro board for running your retrospectives. No account needed! The frontend is [open-sourced](https://github.com/marcellosabino/retroboard-org) so you can feel free and clone the repository and host on-premises if you don't want to use the free public version. Granted, you would
need a backend that supports websockets and basic CRUD functionality for Boards, Columns, Cards, Votes, and Comments.

Try it for yourself at https://retroboard.org

<img src="/images/portfolio/retroboard-org/image-1.png" alt="hero-image" />

## Features

1. Anonymous feature, but can be audited through the `ownerId` field for enterprises.
2. Live updates
3. Customizable boards
4. No account needed
5. Easily retrieve previousily accessed boards
6. Mobile friendly if you're on the go
7. Much more.

## Why?

I created this application because there are really no free, open-sourced retroboards that allows
you to create boards without signing up for an account. I also only released the frontend portion
of this website because I wanted to give the ability to engineers to use a backend framework that
they are comfortable with. For those curious though, the official https://retroboard.org website's
backend is written in Go using the popular framework `gin-gonic`.
