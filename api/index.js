var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
  mod
)), __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  future: () => future,
  publicPath: () => publicPath,
  routes: () => routes
});
module.exports = __toCommonJS(stdin_exports);

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_stream = require("stream"), import_node = require("@remix-run/node"), import_react = require("@remix-run/react"), import_isbot = __toESM(require("isbot")), import_server = require("react-dom/server"), import_jsx_runtime = require("react/jsx-runtime"), ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return (0, import_isbot.default)(request.headers.get("user-agent")) ? handleBotRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  ) : handleBrowserRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  );
}
function handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let didError = !1, { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.RemixServer, {
        context: remixContext,
        url: request.url
      }),
      {
        onAllReady() {
          let body = new import_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node.Response(body, {
              headers: responseHeaders,
              status: didError ? 500 : responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          didError = !0, console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let didError = !1, { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.RemixServer, {
        context: remixContext,
        url: request.url
      }),
      {
        onShellReady() {
          let body = new import_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node.Response(body, {
              headers: responseHeaders,
              status: didError ? 500 : responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(err) {
          reject(err);
        },
        onError(error) {
          didError = !0, console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links,
  meta: () => meta
});
var import_react2 = require("@remix-run/react");

// app/styles/tailwind.css
var tailwind_default = "/build/_assets/tailwind-LYSWYIOY.css";

// app/styles/app.css
var app_default = "/build/_assets/app-55DNWN2R.css";

// app/root.tsx
var import_jsx_runtime2 = require("react/jsx-runtime"), links = () => [
  { rel: "stylesheet", href: tailwind_default },
  { rel: "stylesheet", href: app_default }
], meta = () => ({
  charset: "utf-8",
  title: "QR Code Generator",
  viewport: "width=device-width,initial-scale=1"
});
function App() {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("html", {
    lang: "en",
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("head", {
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react2.Meta, {}),
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react2.Links, {})
        ]
      }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("body", {
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react2.Outlet, {}),
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react2.ScrollRestoration, {}),
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react2.Scripts, {}),
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react2.LiveReload, {})
        ]
      })
    ]
  });
}

// app/routes/auth/index.tsx
var auth_exports = {};
__export(auth_exports, {
  default: () => AuthIndex
});
var import_react3 = require("@remix-run/react"), import_jsx_runtime3 = require("react/jsx-runtime");
function AuthIndex() {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", {
    className: "min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12",
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", {
        className: "relative py-3 sm:max-w-xl sm:mx-auto",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", {
            className: "absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"
          }),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", {
            className: "relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20",
            children: /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", {
              className: "max-w-md mx-auto",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", {
                  children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("h1", {
                    className: "text-2xl font-semibold",
                    children: "Login"
                  })
                }),
                /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", {
                  className: "divide-y divide-gray-200",
                  children: /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", {
                    className: "py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", {
                        className: "relative",
                        children: [
                          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("input", {
                            autoComplete: "off",
                            id: "email",
                            name: "email",
                            type: "text",
                            disabled: !0,
                            className: "peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600",
                            placeholder: "Upcoming Feature"
                          }),
                          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("label", {
                            htmlFor: "email",
                            className: "absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm",
                            children: "Email Address"
                          })
                        ]
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", {
                        className: "relative",
                        children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("button", {
                          type: "submit",
                          className: "bg-blue-500 text-white rounded-md px-2 py-1",
                          children: "Submit"
                        })
                      })
                    ]
                  })
                })
              ]
            })
          })
        ]
      }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_react3.Link, {
        to: "/",
        className: "fixed flex rounded-full bottom-10 right-14 bg-blue-300 w-[55px] h-[55px] items-center justify-center",
        children: /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 24 24",
          width: "50%",
          height: "50%",
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", {
              fill: "none",
              d: "M0 0h24v24H0z"
            }),
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", {
              fill: "#FFFFFF",
              d: "M19 21H5a1 1 0 0 1-1-1v-9H1l10.327-9.388a1 1 0 0 1 1.346 0L23 11h-3v9a1 1 0 0 1-1 1zm-6-2h5V9.157l-6-5.454-6 5.454V19h5v-6h2v6z"
            })
          ]
        })
      })
    ]
  });
}

// app/routes/dashboard.tsx
var dashboard_exports = {};
__export(dashboard_exports, {
  default: () => DashboardIndex,
  meta: () => meta2
});

// app/components/Dialog.tsx
var import_react4 = require("@headlessui/react"), import_jsx_runtime4 = require("react/jsx-runtime");
function DialogQR({ isOpen, setIsOpen, QRiFrame }) {
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_react4.Transition, {
    appear: !0,
    show: isOpen,
    children: /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(import_react4.Dialog, {
      as: "div",
      className: "relative z-10",
      onClose: () => setIsOpen(!1),
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_react4.Transition.Child, {
          enter: "ease-out duration-300",
          enterFrom: "opacity-0",
          enterTo: "opacity-100",
          leave: "ease-in duration-200",
          leaveFrom: "opacity-100",
          leaveTo: "opacity-0",
          children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", {
            className: "fixed inset-0 bg-black bg-opacity-25"
          })
        }),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", {
          className: "fixed inset-0 overflow-y-auto",
          children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", {
            className: "flex min-h-full items-center justify-center p-4 text-center",
            children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_react4.Transition.Child, {
              enter: "ease-out duration-300",
              enterFrom: "opacity-0 scale-95",
              enterTo: "opacity-100 scale-100",
              leave: "ease-in duration-200",
              leaveFrom: "opacity-100 scale-100",
              leaveTo: "opacity-0 scale-95",
              children: /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(import_react4.Dialog.Panel, {
                className: "w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all",
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_react4.Dialog.Title, {
                    as: "h3",
                    className: "text-lg font-medium leading-6 text-gray-900",
                    children: "QR Viewer"
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", {
                    className: "mt-2",
                    children: QRiFrame
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", {
                    className: "mt-6",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("button", {
                        type: "button",
                        className: "inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2",
                        onClick: () => setIsOpen(!1),
                        children: "Nice!"
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("p", {
                        className: "text-gray-400",
                        children: "(right click > save as) to download"
                      })
                    ]
                  })
                ]
              })
            })
          })
        })
      ]
    })
  });
}

// app/components/Container.tsx
var import_jsx_runtime5 = require("react/jsx-runtime");
function Container({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", {
    className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
    ...props
  });
}

// app/components/Footer.tsx
var import_jsx_runtime6 = require("react/jsx-runtime");
function Footer() {
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("footer", {
    className: "py-16",
    children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(Container, {
      className: "flex flex-col items-center justify-between md:flex-row",
      children: /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("p", {
        className: "mt-6 text-base text-slate-500 md:mt-0",
        children: [
          "Copyright \xA9 ",
          new Date().getFullYear(),
          " Jeremy Fanuel, All rights reserved."
        ]
      })
    })
  });
}

// app/routes/dashboard.tsx
var import_react5 = require("@remix-run/react"), import_react6 = require("react"), import_jsx_runtime7 = require("react/jsx-runtime"), meta2 = () => ({
  title: "Dashboard"
});
function DashboardIndex() {
  let [isOpen, setIsOpen] = (0, import_react6.useState)(!1), textareaContext = (0, import_react6.useRef)(null), fetcher = (0, import_react5.useFetcher)();
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(import_jsx_runtime7.Fragment, {
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("nav", {
        className: "flex px-5 py-3 text-gray-700 border border-gray-200 bg-gray-50 dark:bg-gray-800 dark:border-gray-700",
        "aria-label": "Breadcrumb",
        children: /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("ol", {
          className: "inline-flex items-center space-x-1 md:space-x-3",
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("li", {
              className: "inline-flex items-center",
              children: /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(import_react5.Link, {
                to: "/",
                className: "inline-flex items-center text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white",
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("svg", {
                    className: "w-4 h-4 mr-2",
                    fill: "currentColor",
                    viewBox: "0 0 20 20",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("path", {
                      d: "M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"
                    })
                  }),
                  "Home"
                ]
              })
            }),
            /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("li", {
              children: /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", {
                className: "flex items-center",
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("svg", {
                    className: "w-6 h-6 text-gray-400",
                    fill: "currentColor",
                    viewBox: "0 0 20 20",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("path", {
                      fillRule: "evenodd",
                      d: "M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z",
                      clipRule: "evenodd"
                    })
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(import_react5.Link, {
                    to: "/dashboard",
                    className: "ml-1 text-sm font-medium text-gray-700 hover:text-gray-900 md:ml-2 dark:text-gray-400 dark:hover:text-white",
                    children: "Dashboard"
                  })
                ]
              })
            })
          ]
        })
      }),
      /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("main", {
        children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", {
          className: "flex h-screen bg-gray-100",
          children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", {
            className: "m-auto",
            children: /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(fetcher.Form, {
              method: "post",
              action: "/qr/create",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("button", {
                  type: "submit",
                  onClick: () => setIsOpen(!0),
                  className: "relative w-full flex justify-center items-center px-5 py-2.5 font-medium tracking-wide text-white capitalize bg-black rounded-md hover:bg-gray-900 focus:outline-none transition duration-300 transform active:scale-95 ease-in-out",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      width: "24",
                      height: "24",
                      viewBox: "0 0 24 24",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("path", {
                          fill: "none",
                          d: "M0 0h24v24H0z"
                        }),
                        /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("path", {
                          fill: "#FFFFFF",
                          d: "M16 17v-1h-3v-3h3v2h2v2h-1v2h-2v2h-2v-3h2v-1h1zm5 4h-4v-2h2v-2h2v4zM3 3h8v8H3V3zm2 2v4h4V5H5zm8-2h8v8h-8V3zm2 2v4h4V5h-4zM3 13h8v8H3v-8zm2 2v4h4v-4H5zm13-2h3v2h-3v-2zM6 6h2v2H6V6zm0 10h2v2H6v-2zM16 6h2v2h-2V6z"
                        })
                      ]
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", {
                      className: "pl-2 mx-1",
                      children: "Generate QR"
                    })
                  ]
                }),
                /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", {
                  className: "mt-5 bg-white rounded-lg shadow",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", {
                      className: "flex",
                      children: /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", {
                        className: "flex-1 py-5 pl-5 overflow-hidden",
                        children: [
                          /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("svg", {
                            className: "inline align-text-top",
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "0 0 24 24",
                            width: "24",
                            height: "24",
                            children: [
                              /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("path", {
                                fill: "none",
                                d: "M0 0h24v24H0z"
                              }),
                              /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("path", {
                                d: "M13 6v15h-2V6H5V4h14v2z"
                              })
                            ]
                          }),
                          /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("h1", {
                            className: "inline text-2xl font-semibold leading-none",
                            children: "Content"
                          })
                        ]
                      })
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", {
                      className: "px-5 pb-5",
                      children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("textarea", {
                        name: "edt_content",
                        ref: textareaContext,
                        placeholder: "Insert Content Here",
                        cols: "40",
                        rows: "5",
                        maxlength: "2331",
                        className: " text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200 focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-200 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
                      })
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("hr", {
                      className: "mt-4"
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", {
                      className: "flex flex-row-reverse p-3",
                      children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", {
                        className: "flex-initial",
                        children: /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("button", {
                          type: "button",
                          onClick: () => {
                            textareaContext.current.value = "", textareaContext.current.focus();
                          },
                          className: "flex items-center px-5 py-2.5 font-medium tracking-wide text-black capitalize rounded-md  hover:bg-red-200 hover:fill-current hover:text-red-600  focus:outline-none  transition duration-300 transform active:scale-95 ease-in-out",
                          children: [
                            /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("svg", {
                              xmlns: "http://www.w3.org/2000/svg",
                              height: "24px",
                              viewBox: "0 0 24 24",
                              width: "24px",
                              children: [
                                /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("path", {
                                  d: "M0 0h24v24H0V0z",
                                  fill: "none"
                                }),
                                /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("path", {
                                  d: "M8 9h8v10H8z",
                                  opacity: ".3"
                                }),
                                /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("path", {
                                  d: "M15.5 4l-1-1h-5l-1 1H5v2h14V4zM6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9z"
                                })
                              ]
                            }),
                            /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", {
                              className: "pl-2 mx-1",
                              children: "Clear"
                            })
                          ]
                        })
                      })
                    })
                  ]
                })
              ]
            })
          })
        })
      }),
      fetcher.data ? /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(DialogQR, {
        isOpen,
        setIsOpen,
        QRiFrame: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("iframe", {
          src: fetcher.data,
          className: "w-[100%] h-[100%]"
        })
      }) : /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(DialogQR, {
        isOpen,
        setIsOpen,
        QRiFrame: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("h3", {
          className: "text-red-600",
          children: "No Content"
        })
      }),
      /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(Footer, {})
    ]
  });
}

// app/routes/qr/create.tsx
var create_exports = {};
__export(create_exports, {
  ErrorBoundary: () => ErrorBoundary,
  action: () => action,
  default: () => CreateQR,
  generateQR: () => generateQR,
  links: () => links2
});
var import_react7 = require("@remix-run/react"), QRCode = __toESM(require("qrcode"));

// app/styles/qr.css
var qr_default = "/build/_assets/qr-VUYKGJ5B.css";

// app/routes/qr/create.tsx
var import_jsx_runtime8 = require("react/jsx-runtime"), links2 = () => [{ rel: "stylesheet", href: qr_default }], generateQR = async (text) => {
  try {
    return await QRCode.toDataURL(text);
  } catch (err) {
    console.error(err);
  }
};
async function action({ request }) {
  let edt_content = (await request.formData()).get("edt_content"), errors = {};
  if (request.method !== "POST" || ((typeof edt_content != "string" || edt_content.length <= 0) && (errors.content = "hey :)... Should i report this?"), Object.keys(errors).length))
    return null;
  let qr = await generateQR(edt_content);
  return new Response(qr, {
    status: 200,
    headers: {
      "Content-Type": "image/png"
    }
  });
}
function ErrorBoundary({ error }) {
  return /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", {
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("h1", {
        children: "Error"
      }),
      /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("p", {
        children: error.message
      }),
      /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("p", {
        children: "The stack trace is:"
      }),
      /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("pre", {
        children: error.stack
      })
    ]
  });
}
function CreateQR() {
  let data = (0, import_react7.useActionData)();
  return /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(import_jsx_runtime8.Fragment, {
    children: data ? /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("img", {
      src: data,
      alt: "QR Code"
    }) : /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", {
      className: "container",
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", {
          className: "unicode",
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("div", {
              children: "?"
            }),
            /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("div", {
              className: "middle",
              children: "?"
            }),
            /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("div", {
              className: "right",
              children: "?"
            })
          ]
        }),
        /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", {
          className: "big-circle head",
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("div", {
              className: "ear ear-left"
            }),
            /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("div", {
              className: "ear ear-right"
            }),
            /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("div", {
              className: "eye eye-left"
            }),
            /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("div", {
              className: "eye eye-right"
            }),
            /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("div", {
              className: "nose"
            }),
            /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("div", {
              className: "mouth"
            })
          ]
        }),
        /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("div", {
          className: "body"
        }),
        /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("div", {
          className: "big-circle hand hand-left"
        }),
        /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("div", {
          className: "hand hand-right"
        }),
        /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("div", {
          className: "leg leg-left"
        }),
        /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("div", {
          className: "leg leg-right"
        }),
        /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("div", {
          className: "shadow"
        })
      ]
    })
  });
}

// app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index,
  loader: () => loader
});

// app/components/Button.tsx
var import_react8 = require("@remix-run/react"), import_jsx_runtime9 = require("react/jsx-runtime"), styles = "inline-flex justify-center rounded-2xl bg-blue-600 p-4 text-base font-semibold text-white hover:bg-blue-500 active:text-white/70 focus:outline-none focus-visible:outline-offset-2 focus-visible:outline-2 focus-visible:outline-blue-500";
function ButtonLink({ href, className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(import_react8.Link, {
    to: href,
    className: `${className} ${styles}`,
    ...props
  });
}

// app/components/Header.tsx
var import_jsx_runtime10 = require("react/jsx-runtime");
function Header({ date, location }) {
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("header", {
    className: "relative z-50 pb-11 lg:pt-11",
    children: /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)(Container, {
      className: "flex flex-wrap items-center justify-center sm:justify-between lg:flex-nowrap",
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", {
          className: "order-first -mx-4 flex flex-auto basis-full overflow-x-auto whitespace-nowrap border-b border-blue-600/10 py-4 font-mono text-sm text-blue-600 sm:-mx-6 lg:order-none lg:mx-0 lg:basis-auto lg:border-0 lg:py-0",
          children: /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", {
            className: "mx-auto flex items-center space-x-4 px-4",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("p", {
                children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("time", {
                  dateTime: date ?? "",
                  children: date ?? ""
                })
              }),
              /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("svg", {
                "aria-hidden": "true",
                className: "h-1.5 w-1.5 overflow-visible fill-current stroke-current",
                children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("path", {
                  d: "M3 0L6 3L3 6L0 3Z",
                  strokeWidth: 2,
                  strokeLinejoin: "round"
                })
              }),
              /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("p", {
                children: location
              })
            ]
          })
        }),
        /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", {
          className: "hidden sm:mt-10 sm:flex lg:mt-0 lg:grow lg:basis-0 lg:justify-end",
          children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(ButtonLink, {
            to: "/auth",
            children: "Sign In"
          })
        })
      ]
    })
  });
}

// app/components/Hero.tsx
var import_jsx_runtime11 = require("react/jsx-runtime");
function Hero() {
  function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  return /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", {
    className: "relative pt-10 pb-20 sm:py-24",
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", {
        className: "absolute -inset-x-0 -top-48 -bottom-14 overflow-hidden bg-indigo-50 z-[-1]",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", {
            className: "absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white"
          }),
          /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", {
            className: "absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white"
          })
        ]
      }),
      /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(Container, {
        className: "relative",
        children: /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", {
          className: "mx-auto max-w-2xl lg:max-w-4xl lg:px-12",
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("h1", {
              className: "font-display text-5xl font-bold tracking-tighter text-blue-600 sm:text-7xl",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("span", {
                  className: "sr-only",
                  children: "QR Code Generator "
                }),
                "QR Code Generator"
              ]
            }),
            /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", {
              className: "mt-6 space-y-6 font-display text-2xl tracking-tight text-blue-900",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("p", {
                  children: "The next generation of QR code generator with extra utility and function. Usefull for validation of users or participans with API to access your data and secure way to store your data for free."
                }),
                /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("p", {
                  children: "Sign In to connect your data with validation from qr code. Any data recieved will be encrypted and stored somewhere safe. We are not responsible for any loss of data nor data misuse from our users."
                })
              ]
            }),
            /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(ButtonLink, {
              href: "/dashboard",
              className: "mt-10 w-full",
              children: "Getting Started"
            }),
            /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("dl", {
              className: "mt-10 grid grid-cols-2 gap-y-6 gap-x-10 sm:mt-16 sm:gap-y-10 sm:gap-x-16 sm:text-center lg:auto-cols-auto lg:grid-flow-col lg:grid-cols-none lg:justify-start lg:text-left",
              children: [
                ["API HIT", randomInteger(1e3, 1e5)],
                ["Users", randomInteger(1, 50)],
                ["QR Code Generated", randomInteger(1, 1e6)]
              ].map(([name, value]) => /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", {
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("dt", {
                    className: "font-mono text-sm text-blue-600",
                    children: name
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("dd", {
                    className: "mt-0.5 text-2xl font-semibold tracking-tight text-blue-900",
                    children: value
                  })
                ]
              }, name))
            })
          ]
        })
      })
    ]
  });
}

// app/routes/index.tsx
var import_node2 = require("@remix-run/node"), import_react9 = require("@remix-run/react"), import_jsx_runtime12 = require("react/jsx-runtime");
async function loader({ request, params }) {
  let resp = await fetch(
    "http://ip-api.com/json/?fields=country,regionName,city"
  ), locationString = "Another World Far Far Away";
  if (resp.status == 200) {
    let locationData = await resp.json();
    locationString = `${locationData.city}, ${locationData.country} ${locationData.regionName}`;
  }
  return (0, import_node2.json)({
    date: new Date().toLocaleString(),
    location: locationString
  });
}
function Index() {
  let loaderData = (0, import_react9.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)(import_jsx_runtime12.Fragment, {
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(Header, {
        date: loaderData.date,
        location: loaderData.location
      }),
      /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("main", {
        children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(Hero, {})
      }),
      /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(Footer, {})
    ]
  });
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { version: "d42f7e43", entry: { module: "/build/entry.client-47XMPTRV.js", imports: ["/build/_shared/chunk-TBJI3YE7.js", "/build/_shared/chunk-YDJG2CEE.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-4RDSV6QB.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/auth/index": { id: "routes/auth/index", parentId: "root", path: "auth", index: !0, caseSensitive: void 0, module: "/build/routes/auth/index-6WVBJ6XO.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/dashboard": { id: "routes/dashboard", parentId: "root", path: "dashboard", index: void 0, caseSensitive: void 0, module: "/build/routes/dashboard-QIR2ZBP4.js", imports: ["/build/_shared/chunk-IGFYCDID.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/index": { id: "routes/index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/index-FONULV4E.js", imports: ["/build/_shared/chunk-IGFYCDID.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/qr/create": { id: "routes/qr/create", parentId: "root", path: "qr/create", index: void 0, caseSensitive: void 0, module: "/build/routes/qr/create-MVUTPYJ3.js", imports: void 0, hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !0 } }, url: "/build/manifest-D42F7E43.js" };

// server-entry-module:@remix-run/dev/server-build
var assetsBuildDirectory = "public\\build", future = { v2_meta: !1 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/auth/index": {
    id: "routes/auth/index",
    parentId: "root",
    path: "auth",
    index: !0,
    caseSensitive: void 0,
    module: auth_exports
  },
  "routes/dashboard": {
    id: "routes/dashboard",
    parentId: "root",
    path: "dashboard",
    index: void 0,
    caseSensitive: void 0,
    module: dashboard_exports
  },
  "routes/qr/create": {
    id: "routes/qr/create",
    parentId: "root",
    path: "qr/create",
    index: void 0,
    caseSensitive: void 0,
    module: create_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: routes_exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  assetsBuildDirectory,
  entry,
  future,
  publicPath,
  routes
});
