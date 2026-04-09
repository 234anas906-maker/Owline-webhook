# components-sdk

This library is designed to provide an intuitive interface for creating Discord-style components. The primary goal is not to replicate Discord’s UI elements exactly, but to offer a close visual approximation that allows users to understand how a message will look — functioning as a lightweight WYSIWYG editor.

The focus is on keeping the library minimal, with as few dependencies as possible. It will consist solely of React components that emulate Discord’s UI. Any elements not directly related to Discord should be abstracted through interfaces and implemented separately within the final application.

Read more on [src/polyfills/README.md](src/polyfills/README.md)

## PolyForm Noncommercial License 1.0.0

This software is provided under [the PolyForm Noncommercial License 1.0.0](LICENSE.md), which allows free use for personal, educational, and other noncommercial purposes. However, commercial use — including integration into proprietary bots, dashboards, or any other revenue-generating products — requires a separate commercial license.

**Why?**

My goal is to ensure that everyone has an easier time creating Discord bots, including potential competitors. That being said, I do not want people to incorporate this generator into dashboards for their **commercial** bots. It is meant to be a tool for individuals, not an SDK that people can use to generate commercial revenue. Please understand that this is not a restriction but rather a measure to ensure that the tool remains accessible for personal use, while also protecting its value.
