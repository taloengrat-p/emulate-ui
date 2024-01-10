var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
};

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
import { PassThrough } from "node:stream";
import { createReadableStreamFromReadable } from "@remix-run/node";
import { RemixServer } from "@remix-run/react";
import isbot from "isbot";
import { renderToPipeableStream } from "react-dom/server";
import { jsx } from "react/jsx-runtime";
var ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext, loadContext) {
  return isbot(request.headers.get("user-agent")) ? handleBotRequest(
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
    let shellRendered = !1, { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsx(
        RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        }
      ),
      {
        onAllReady() {
          shellRendered = !0;
          let body = new PassThrough(), stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsx(
        RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        }
      ),
      {
        onShellReady() {
          shellRendered = !0;
          let body = new PassThrough(), stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
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
  links: () => links
});

// app/tailwind.css
var tailwind_default = "/build/_assets/tailwind-QOWCQP66.css";

// app/root.tsx
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration
} from "@remix-run/react";

// app/components/ui/tabs.tsx
import * as React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";

// app/lib/utils.ts
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
function cn(...inputs) {
  return twMerge(clsx(inputs));
}

// app/components/ui/tabs.tsx
import { jsx as jsx2 } from "react/jsx-runtime";
var Tabs = TabsPrimitive.Root, TabsList = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx2(
  TabsPrimitive.List,
  {
    ref,
    className: cn(
      "inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground",
      className
    ),
    ...props
  }
));
TabsList.displayName = TabsPrimitive.List.displayName;
var TabsTrigger = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx2(
  TabsPrimitive.Trigger,
  {
    ref,
    className: cn(
      "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm",
      className
    ),
    ...props
  }
));
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;
var TabsContent = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx2(
  TabsPrimitive.Content,
  {
    ref,
    className: cn(
      "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      className
    ),
    ...props
  }
));
TabsContent.displayName = TabsPrimitive.Content.displayName;

// app/components/share/tabs-list.tsx
import { jsx as jsx3 } from "react/jsx-runtime";
function ShareTabsList({ items: items2, onChange }) {
  function handleClick(item) {
    onChange(item);
  }
  return /* @__PURE__ */ jsx3(TabsList, { children: items2.map((el, index) => /* @__PURE__ */ jsx3(
    TabsTrigger,
    {
      value: el.value,
      disabled: el.disabled,
      onClick: () => {
        handleClick(el);
      },
      children: el.title
    },
    index
  )) });
}

// app/components/share/navbar.tsx
import { jsx as jsx4, jsxs } from "react/jsx-runtime";
function ShareNavbar({
  items: items2,
  onTabClick,
  defaultValue,
  children,
  tabAction,
  tabClassName
}) {
  function onClickTab(item) {
    onTabClick && onTabClick(item);
  }
  return /* @__PURE__ */ jsxs(Tabs, { className: "w-full m-4", defaultValue, children: [
    /* @__PURE__ */ jsxs("div", { className: tabClassName, children: [
      /* @__PURE__ */ jsx4(ShareTabsList, { items: items2, onChange: onClickTab }),
      tabAction
    ] }),
    children
  ] });
}

// app/root.tsx
import { useNavigate } from "@remix-run/react";
import { useLocation } from "@remix-run/react";
import { jsx as jsx5, jsxs as jsxs2 } from "react/jsx-runtime";
var links = () => [
  { rel: "stylesheet", href: tailwind_default },
  ...void 0 ? [{ rel: "stylesheet", href: void 0 }] : []
], navItems = [
  {
    title: "Dashboard",
    value: "dashboard",
    to: "/dashboard"
  },
  {
    title: "Music",
    value: "music",
    to: "/music"
  },
  {
    title: "Mail",
    value: "mail",
    to: "/mail"
  },
  {
    title: "Tasks",
    value: "tasks",
    to: "/tasks"
  },
  {
    title: "Forms",
    value: "forms",
    to: "/forms/profile"
  }
];
function App() {
  let navigate = useNavigate(), location = useLocation();
  return /* @__PURE__ */ jsxs2("html", { lang: "en", children: [
    /* @__PURE__ */ jsxs2("head", { children: [
      /* @__PURE__ */ jsx5("meta", { charSet: "utf-8" }),
      /* @__PURE__ */ jsx5("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }),
      /* @__PURE__ */ jsx5(Meta, {}),
      /* @__PURE__ */ jsx5(Links, {})
    ] }),
    /* @__PURE__ */ jsxs2("body", { children: [
      /* @__PURE__ */ jsxs2("div", { children: [
        /* @__PURE__ */ jsx5(
          ShareNavbar,
          {
            defaultValue: location.pathname.replace("/", ""),
            items: navItems.map((el) => ({
              title: el.title,
              value: el.value
            })),
            onTabClick: (item) => {
              let tabItem = navItems.find((e) => e.title === item.title);
              tabItem && navigate(tabItem.to);
            }
          }
        ),
        /* @__PURE__ */ jsx5(Outlet, {})
      ] }),
      /* @__PURE__ */ jsx5(ScrollRestoration, {}),
      /* @__PURE__ */ jsx5(Scripts, {}),
      /* @__PURE__ */ jsx5(LiveReload, {})
    ] })
  ] });
}

// app/routes/forms.notifications.tsx
var forms_notifications_exports = {};
__export(forms_notifications_exports, {
  default: () => SettingsProfilePage
});

// app/components/ui/separator.tsx
import * as React2 from "react";
import * as SeparatorPrimitive from "@radix-ui/react-separator";
import { jsx as jsx6 } from "react/jsx-runtime";
var Separator = React2.forwardRef(
  ({ className, orientation = "horizontal", decorative = !0, ...props }, ref) => /* @__PURE__ */ jsx6(
    SeparatorPrimitive.Root,
    {
      ref,
      decorative,
      orientation,
      className: cn(
        "shrink-0 bg-border",
        orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",
        className
      ),
      ...props
    }
  )
);
Separator.displayName = SeparatorPrimitive.Root.displayName;

// app/components/forms/profile-form.tsx
import { zodResolver } from "@hookform/resolvers/zod";
import { useFieldArray, useForm } from "react-hook-form";
import * as z from "zod";

// app/components/ui/button.tsx
import * as React3 from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import { jsx as jsx7 } from "react/jsx-runtime";
var buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
), Button = React3.forwardRef(
  ({ className, variant, size, asChild = !1, ...props }, ref) => /* @__PURE__ */ jsx7(
    asChild ? Slot : "button",
    {
      className: cn(buttonVariants({ variant, size, className })),
      ref,
      ...props
    }
  )
);
Button.displayName = "Button";

// app/components/ui/form.tsx
import * as React5 from "react";
import { Slot as Slot2 } from "@radix-ui/react-slot";
import {
  Controller,
  FormProvider,
  useFormContext
} from "react-hook-form";

// app/components/ui/label.tsx
import * as React4 from "react";
import * as LabelPrimitive from "@radix-ui/react-label";
import { cva as cva2 } from "class-variance-authority";
import { jsx as jsx8 } from "react/jsx-runtime";
var labelVariants = cva2(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
), Label = React4.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx8(
  LabelPrimitive.Root,
  {
    ref,
    className: cn(labelVariants(), className),
    ...props
  }
));
Label.displayName = LabelPrimitive.Root.displayName;

// app/components/ui/form.tsx
import { jsx as jsx9 } from "react/jsx-runtime";
var Form = FormProvider, FormFieldContext = React5.createContext(
  {}
), FormField = ({
  ...props
}) => /* @__PURE__ */ jsx9(FormFieldContext.Provider, { value: { name: props.name }, children: /* @__PURE__ */ jsx9(Controller, { ...props }) }), useFormField = () => {
  let fieldContext = React5.useContext(FormFieldContext), itemContext = React5.useContext(FormItemContext), { getFieldState, formState } = useFormContext(), fieldState = getFieldState(fieldContext.name, formState);
  if (!fieldContext)
    throw new Error("useFormField should be used within <FormField>");
  let { id } = itemContext;
  return {
    id,
    name: fieldContext.name,
    formItemId: `${id}-form-item`,
    formDescriptionId: `${id}-form-item-description`,
    formMessageId: `${id}-form-item-message`,
    ...fieldState
  };
}, FormItemContext = React5.createContext(
  {}
), FormItem = React5.forwardRef(({ className, ...props }, ref) => {
  let id = React5.useId();
  return /* @__PURE__ */ jsx9(FormItemContext.Provider, { value: { id }, children: /* @__PURE__ */ jsx9("div", { ref, className: cn("space-y-2", className), ...props }) });
});
FormItem.displayName = "FormItem";
var FormLabel = React5.forwardRef(({ className, ...props }, ref) => {
  let { error, formItemId } = useFormField();
  return /* @__PURE__ */ jsx9(
    Label,
    {
      ref,
      className: cn(error && "text-destructive", className),
      htmlFor: formItemId,
      ...props
    }
  );
});
FormLabel.displayName = "FormLabel";
var FormControl = React5.forwardRef(({ ...props }, ref) => {
  let { error, formItemId, formDescriptionId, formMessageId } = useFormField();
  return /* @__PURE__ */ jsx9(
    Slot2,
    {
      ref,
      id: formItemId,
      "aria-describedby": error ? `${formDescriptionId} ${formMessageId}` : `${formDescriptionId}`,
      "aria-invalid": !!error,
      ...props
    }
  );
});
FormControl.displayName = "FormControl";
var FormDescription = React5.forwardRef(({ className, ...props }, ref) => {
  let { formDescriptionId } = useFormField();
  return /* @__PURE__ */ jsx9(
    "p",
    {
      ref,
      id: formDescriptionId,
      className: cn("text-sm text-muted-foreground", className),
      ...props
    }
  );
});
FormDescription.displayName = "FormDescription";
var FormMessage = React5.forwardRef(({ className, children, ...props }, ref) => {
  let { error, formMessageId } = useFormField(), body = error ? String(error?.message) : children;
  return body ? /* @__PURE__ */ jsx9(
    "p",
    {
      ref,
      id: formMessageId,
      className: cn("text-sm font-medium text-destructive", className),
      ...props,
      children: body
    }
  ) : null;
});
FormMessage.displayName = "FormMessage";

// app/components/ui/input.tsx
import * as React6 from "react";
import { jsx as jsx10 } from "react/jsx-runtime";
var Input = React6.forwardRef(
  ({ className, type, ...props }, ref) => /* @__PURE__ */ jsx10(
    "input",
    {
      type,
      className: cn(
        "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        className
      ),
      ref,
      ...props
    }
  )
);
Input.displayName = "Input";

// app/components/ui/select.tsx
import * as React7 from "react";
import * as SelectPrimitive from "@radix-ui/react-select";
import { Check, ChevronDown, ChevronUp } from "lucide-react";
import { jsx as jsx11, jsxs as jsxs3 } from "react/jsx-runtime";
var Select = SelectPrimitive.Root;
var SelectValue = SelectPrimitive.Value, SelectTrigger = React7.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxs3(
  SelectPrimitive.Trigger,
  {
    ref,
    className: cn(
      "flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",
      className
    ),
    ...props,
    children: [
      children,
      /* @__PURE__ */ jsx11(SelectPrimitive.Icon, { asChild: !0, children: /* @__PURE__ */ jsx11(ChevronDown, { className: "h-4 w-4 opacity-50" }) })
    ]
  }
));
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName;
var SelectScrollUpButton = React7.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx11(
  SelectPrimitive.ScrollUpButton,
  {
    ref,
    className: cn(
      "flex cursor-default items-center justify-center py-1",
      className
    ),
    ...props,
    children: /* @__PURE__ */ jsx11(ChevronUp, { className: "h-4 w-4" })
  }
));
SelectScrollUpButton.displayName = SelectPrimitive.ScrollUpButton.displayName;
var SelectScrollDownButton = React7.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx11(
  SelectPrimitive.ScrollDownButton,
  {
    ref,
    className: cn(
      "flex cursor-default items-center justify-center py-1",
      className
    ),
    ...props,
    children: /* @__PURE__ */ jsx11(ChevronDown, { className: "h-4 w-4" })
  }
));
SelectScrollDownButton.displayName = SelectPrimitive.ScrollDownButton.displayName;
var SelectContent = React7.forwardRef(({ className, children, position = "popper", ...props }, ref) => /* @__PURE__ */ jsx11(SelectPrimitive.Portal, { children: /* @__PURE__ */ jsxs3(
  SelectPrimitive.Content,
  {
    ref,
    className: cn(
      "relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
      className
    ),
    position,
    ...props,
    children: [
      /* @__PURE__ */ jsx11(SelectScrollUpButton, {}),
      /* @__PURE__ */ jsx11(
        SelectPrimitive.Viewport,
        {
          className: cn(
            "p-1",
            position === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
          ),
          children
        }
      ),
      /* @__PURE__ */ jsx11(SelectScrollDownButton, {})
    ]
  }
) }));
SelectContent.displayName = SelectPrimitive.Content.displayName;
var SelectLabel = React7.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx11(
  SelectPrimitive.Label,
  {
    ref,
    className: cn("py-1.5 pl-8 pr-2 text-sm font-semibold", className),
    ...props
  }
));
SelectLabel.displayName = SelectPrimitive.Label.displayName;
var SelectItem = React7.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxs3(
  SelectPrimitive.Item,
  {
    ref,
    className: cn(
      "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    ),
    ...props,
    children: [
      /* @__PURE__ */ jsx11("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ jsx11(SelectPrimitive.ItemIndicator, { children: /* @__PURE__ */ jsx11(Check, { className: "h-4 w-4" }) }) }),
      /* @__PURE__ */ jsx11(SelectPrimitive.ItemText, { children })
    ]
  }
));
SelectItem.displayName = SelectPrimitive.Item.displayName;
var SelectSeparator = React7.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx11(
  SelectPrimitive.Separator,
  {
    ref,
    className: cn("-mx-1 my-1 h-px bg-muted", className),
    ...props
  }
));
SelectSeparator.displayName = SelectPrimitive.Separator.displayName;

// app/components/ui/textarea.tsx
import * as React8 from "react";
import { jsx as jsx12 } from "react/jsx-runtime";
var Textarea = React8.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx12(
    "textarea",
    {
      className: cn(
        "flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        className
      ),
      ref,
      ...props
    }
  )
);
Textarea.displayName = "Textarea";

// app/components/ui/use-toast.ts
import * as React9 from "react";
var TOAST_LIMIT = 1, TOAST_REMOVE_DELAY = 1e6;
var count = 0;
function genId() {
  return count = (count + 1) % Number.MAX_SAFE_INTEGER, count.toString();
}
var toastTimeouts = /* @__PURE__ */ new Map(), addToRemoveQueue = (toastId) => {
  if (toastTimeouts.has(toastId))
    return;
  let timeout = setTimeout(() => {
    toastTimeouts.delete(toastId), dispatch({
      type: "REMOVE_TOAST",
      toastId
    });
  }, TOAST_REMOVE_DELAY);
  toastTimeouts.set(toastId, timeout);
}, reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TOAST":
      return {
        ...state,
        toasts: [action.toast, ...state.toasts].slice(0, TOAST_LIMIT)
      };
    case "UPDATE_TOAST":
      return {
        ...state,
        toasts: state.toasts.map(
          (t) => t.id === action.toast.id ? { ...t, ...action.toast } : t
        )
      };
    case "DISMISS_TOAST": {
      let { toastId } = action;
      return toastId ? addToRemoveQueue(toastId) : state.toasts.forEach((toast2) => {
        addToRemoveQueue(toast2.id);
      }), {
        ...state,
        toasts: state.toasts.map(
          (t) => t.id === toastId || toastId === void 0 ? {
            ...t,
            open: !1
          } : t
        )
      };
    }
    case "REMOVE_TOAST":
      return action.toastId === void 0 ? {
        ...state,
        toasts: []
      } : {
        ...state,
        toasts: state.toasts.filter((t) => t.id !== action.toastId)
      };
  }
}, listeners = [], memoryState = { toasts: [] };
function dispatch(action) {
  memoryState = reducer(memoryState, action), listeners.forEach((listener) => {
    listener(memoryState);
  });
}
function toast({ ...props }) {
  let id = genId(), update = (props2) => dispatch({
    type: "UPDATE_TOAST",
    toast: { ...props2, id }
  }), dismiss = () => dispatch({ type: "DISMISS_TOAST", toastId: id });
  return dispatch({
    type: "ADD_TOAST",
    toast: {
      ...props,
      id,
      open: !0,
      onOpenChange: (open) => {
        open || dismiss();
      }
    }
  }), {
    id,
    dismiss,
    update
  };
}

// app/components/forms/profile-form.tsx
import { jsx as jsx13, jsxs as jsxs4 } from "react/jsx-runtime";
var profileFormSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters."
  }).max(30, {
    message: "Username must not be longer than 30 characters."
  }),
  email: z.string({
    required_error: "Please select an email to display."
  }).email(),
  bio: z.string().max(160).min(4),
  urls: z.array(
    z.object({
      value: z.string().url({ message: "Please enter a valid URL." })
    })
  ).optional()
}), defaultValues = {
  bio: "I own a computer.",
  urls: [
    { value: "https://shadcn.com" },
    { value: "http://twitter.com/shadcn" }
  ]
};
function ProfileForm() {
  let form = useForm({
    resolver: zodResolver(profileFormSchema),
    defaultValues,
    mode: "onChange"
  }), { fields, append } = useFieldArray({
    name: "urls",
    control: form.control
  });
  function onSubmit(data2) {
    toast({
      title: "You submitted the following values:",
      description: /* @__PURE__ */ jsx13("pre", { className: "mt-2 w-[340px] rounded-md bg-slate-950 p-4", children: /* @__PURE__ */ jsx13("code", { className: "text-white", children: JSON.stringify(data2, null, 2) }) })
    });
  }
  return /* @__PURE__ */ jsx13(Form, { ...form, children: /* @__PURE__ */ jsxs4("form", { onSubmit: form.handleSubmit(onSubmit), className: "space-y-8", children: [
    /* @__PURE__ */ jsx13(
      FormField,
      {
        control: form.control,
        name: "username",
        render: ({ field }) => /* @__PURE__ */ jsxs4(FormItem, { children: [
          /* @__PURE__ */ jsx13(FormLabel, { children: "Username" }),
          /* @__PURE__ */ jsx13(FormControl, { children: /* @__PURE__ */ jsx13(Input, { placeholder: "shadcn", ...field }) }),
          /* @__PURE__ */ jsx13(FormDescription, { children: "This is your public display name. It can be your real name or a pseudonym. You can only change this once every 30 days." }),
          /* @__PURE__ */ jsx13(FormMessage, {})
        ] })
      }
    ),
    /* @__PURE__ */ jsx13(
      FormField,
      {
        control: form.control,
        name: "email",
        render: ({ field }) => /* @__PURE__ */ jsxs4(FormItem, { children: [
          /* @__PURE__ */ jsx13(FormLabel, { children: "Email" }),
          /* @__PURE__ */ jsxs4(Select, { onValueChange: field.onChange, defaultValue: field.value, children: [
            /* @__PURE__ */ jsx13(FormControl, { children: /* @__PURE__ */ jsx13(SelectTrigger, { children: /* @__PURE__ */ jsx13(SelectValue, { placeholder: "Select a verified email to display" }) }) }),
            /* @__PURE__ */ jsxs4(SelectContent, { children: [
              /* @__PURE__ */ jsx13(SelectItem, { value: "m@example.com", children: "m@example.com" }),
              /* @__PURE__ */ jsx13(SelectItem, { value: "m@google.com", children: "m@google.com" }),
              /* @__PURE__ */ jsx13(SelectItem, { value: "m@support.com", children: "m@support.com" })
            ] })
          ] }),
          /* @__PURE__ */ jsxs4(FormDescription, { children: [
            "You can manage verified email addresses in your",
            " ",
            /* @__PURE__ */ jsx13("a", { href: "/examples/forms", children: "email settings" }),
            "."
          ] }),
          /* @__PURE__ */ jsx13(FormMessage, {})
        ] })
      }
    ),
    /* @__PURE__ */ jsx13(
      FormField,
      {
        control: form.control,
        name: "bio",
        render: ({ field }) => /* @__PURE__ */ jsxs4(FormItem, { children: [
          /* @__PURE__ */ jsx13(FormLabel, { children: "Bio" }),
          /* @__PURE__ */ jsx13(FormControl, { children: /* @__PURE__ */ jsx13(
            Textarea,
            {
              placeholder: "Tell us a little bit about yourself",
              className: "resize-none",
              ...field
            }
          ) }),
          /* @__PURE__ */ jsxs4(FormDescription, { children: [
            "You can ",
            /* @__PURE__ */ jsx13("span", { children: "@mention" }),
            " other users and organizations to link to them."
          ] }),
          /* @__PURE__ */ jsx13(FormMessage, {})
        ] })
      }
    ),
    /* @__PURE__ */ jsxs4("div", { children: [
      fields.map((field, index) => /* @__PURE__ */ jsx13(
        FormField,
        {
          control: form.control,
          name: `urls.${index}.value`,
          render: ({ field: field2 }) => /* @__PURE__ */ jsxs4(FormItem, { children: [
            /* @__PURE__ */ jsx13(FormLabel, { className: cn(index !== 0 && "sr-only"), children: "URLs" }),
            /* @__PURE__ */ jsx13(FormDescription, { className: cn(index !== 0 && "sr-only"), children: "Add links to your website, blog, or social media profiles." }),
            /* @__PURE__ */ jsx13(FormControl, { children: /* @__PURE__ */ jsx13(Input, { ...field2 }) }),
            /* @__PURE__ */ jsx13(FormMessage, {})
          ] })
        },
        field.id
      )),
      /* @__PURE__ */ jsx13(
        Button,
        {
          type: "button",
          variant: "outline",
          size: "sm",
          className: "mt-2",
          onClick: () => append({ value: "" }),
          children: "Add URL"
        }
      )
    ] }),
    /* @__PURE__ */ jsx13(Button, { type: "submit", children: "Update profile" })
  ] }) });
}

// app/routes/forms.notifications.tsx
import { jsx as jsx14, jsxs as jsxs5 } from "react/jsx-runtime";
function SettingsProfilePage() {
  return /* @__PURE__ */ jsxs5("div", { className: "space-y-6", children: [
    /* @__PURE__ */ jsxs5("div", { children: [
      /* @__PURE__ */ jsx14("h3", { className: "text-lg font-medium", children: "Profile" }),
      /* @__PURE__ */ jsx14("p", { className: "text-sm text-muted-foreground", children: "This is how others will see you on the site." })
    ] }),
    /* @__PURE__ */ jsx14(Separator, {}),
    /* @__PURE__ */ jsx14(ProfileForm, {})
  ] });
}

// app/routes/forms.appearance.tsx
var forms_appearance_exports = {};
__export(forms_appearance_exports, {
  default: () => SettingsAppearancePage
});

// app/components/forms/appearance-form.tsx
import { zodResolver as zodResolver2 } from "@hookform/resolvers/zod";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import { useForm as useForm2 } from "react-hook-form";
import * as z2 from "zod";

// app/components/ui/radio-group.tsx
import * as React10 from "react";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import { Circle } from "lucide-react";
import { jsx as jsx15 } from "react/jsx-runtime";
var RadioGroup = React10.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx15(
  RadioGroupPrimitive.Root,
  {
    className: cn("grid gap-2", className),
    ...props,
    ref
  }
));
RadioGroup.displayName = RadioGroupPrimitive.Root.displayName;
var RadioGroupItem = React10.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx15(
  RadioGroupPrimitive.Item,
  {
    ref,
    className: cn(
      "aspect-square h-4 w-4 rounded-full border border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
      className
    ),
    ...props,
    children: /* @__PURE__ */ jsx15(RadioGroupPrimitive.Indicator, { className: "flex items-center justify-center", children: /* @__PURE__ */ jsx15(Circle, { className: "h-2.5 w-2.5 fill-current text-current" }) })
  }
));
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName;

// app/components/forms/appearance-form.tsx
import { jsx as jsx16, jsxs as jsxs6 } from "react/jsx-runtime";
var appearanceFormSchema = z2.object({
  theme: z2.enum(["light", "dark"], {
    required_error: "Please select a theme."
  }),
  font: z2.enum(["inter", "manrope", "system"], {
    invalid_type_error: "Select a font",
    required_error: "Please select a font."
  })
}), defaultValues2 = {
  theme: "light"
};
function AppearanceForm() {
  let form = useForm2({
    resolver: zodResolver2(appearanceFormSchema),
    defaultValues: defaultValues2
  });
  function onSubmit(data2) {
    toast({
      title: "You submitted the following values:",
      description: /* @__PURE__ */ jsx16("pre", { className: "mt-2 w-[340px] rounded-md bg-slate-950 p-4", children: /* @__PURE__ */ jsx16("code", { className: "text-white", children: JSON.stringify(data2, null, 2) }) })
    });
  }
  return /* @__PURE__ */ jsx16(Form, { ...form, children: /* @__PURE__ */ jsxs6("form", { onSubmit: form.handleSubmit(onSubmit), className: "space-y-8", children: [
    /* @__PURE__ */ jsx16(
      FormField,
      {
        control: form.control,
        name: "font",
        render: ({ field }) => /* @__PURE__ */ jsxs6(FormItem, { children: [
          /* @__PURE__ */ jsx16(FormLabel, { children: "Font" }),
          /* @__PURE__ */ jsxs6("div", { className: "relative w-max", children: [
            /* @__PURE__ */ jsx16(FormControl, { children: /* @__PURE__ */ jsxs6(
              "select",
              {
                className: cn(
                  buttonVariants({ variant: "outline" }),
                  "w-[200px] appearance-none bg-transparent font-normal"
                ),
                ...field,
                children: [
                  /* @__PURE__ */ jsx16("option", { value: "inter", children: "Inter" }),
                  /* @__PURE__ */ jsx16("option", { value: "manrope", children: "Manrope" }),
                  /* @__PURE__ */ jsx16("option", { value: "system", children: "System" })
                ]
              }
            ) }),
            /* @__PURE__ */ jsx16(ChevronDownIcon, { className: "absolute right-3 top-2.5 h-4 w-4 opacity-50" })
          ] }),
          /* @__PURE__ */ jsx16(FormDescription, { children: "Set the font you want to use in the dashboard." }),
          /* @__PURE__ */ jsx16(FormMessage, {})
        ] })
      }
    ),
    /* @__PURE__ */ jsx16(
      FormField,
      {
        control: form.control,
        name: "theme",
        render: ({ field }) => /* @__PURE__ */ jsxs6(FormItem, { className: "space-y-1", children: [
          /* @__PURE__ */ jsx16(FormLabel, { children: "Theme" }),
          /* @__PURE__ */ jsx16(FormDescription, { children: "Select the theme for the dashboard." }),
          /* @__PURE__ */ jsx16(FormMessage, {}),
          /* @__PURE__ */ jsxs6(
            RadioGroup,
            {
              onValueChange: field.onChange,
              defaultValue: field.value,
              className: "grid max-w-md grid-cols-2 gap-8 pt-2",
              children: [
                /* @__PURE__ */ jsx16(FormItem, { children: /* @__PURE__ */ jsxs6(FormLabel, { className: "[&:has([data-state=checked])>div]:border-primary", children: [
                  /* @__PURE__ */ jsx16(FormControl, { children: /* @__PURE__ */ jsx16(RadioGroupItem, { value: "light", className: "sr-only" }) }),
                  /* @__PURE__ */ jsx16("div", { className: "items-center rounded-md border-2 border-muted p-1 hover:border-accent", children: /* @__PURE__ */ jsxs6("div", { className: "space-y-2 rounded-sm bg-[#ecedef] p-2", children: [
                    /* @__PURE__ */ jsxs6("div", { className: "space-y-2 rounded-md bg-white p-2 shadow-sm", children: [
                      /* @__PURE__ */ jsx16("div", { className: "h-2 w-[80px] rounded-lg bg-[#ecedef]" }),
                      /* @__PURE__ */ jsx16("div", { className: "h-2 w-[100px] rounded-lg bg-[#ecedef]" })
                    ] }),
                    /* @__PURE__ */ jsxs6("div", { className: "flex items-center space-x-2 rounded-md bg-white p-2 shadow-sm", children: [
                      /* @__PURE__ */ jsx16("div", { className: "h-4 w-4 rounded-full bg-[#ecedef]" }),
                      /* @__PURE__ */ jsx16("div", { className: "h-2 w-[100px] rounded-lg bg-[#ecedef]" })
                    ] }),
                    /* @__PURE__ */ jsxs6("div", { className: "flex items-center space-x-2 rounded-md bg-white p-2 shadow-sm", children: [
                      /* @__PURE__ */ jsx16("div", { className: "h-4 w-4 rounded-full bg-[#ecedef]" }),
                      /* @__PURE__ */ jsx16("div", { className: "h-2 w-[100px] rounded-lg bg-[#ecedef]" })
                    ] })
                  ] }) }),
                  /* @__PURE__ */ jsx16("span", { className: "block w-full p-2 text-center font-normal", children: "Light" })
                ] }) }),
                /* @__PURE__ */ jsx16(FormItem, { children: /* @__PURE__ */ jsxs6(FormLabel, { className: "[&:has([data-state=checked])>div]:border-primary", children: [
                  /* @__PURE__ */ jsx16(FormControl, { children: /* @__PURE__ */ jsx16(RadioGroupItem, { value: "dark", className: "sr-only" }) }),
                  /* @__PURE__ */ jsx16("div", { className: "items-center rounded-md border-2 border-muted bg-popover p-1 hover:bg-accent hover:text-accent-foreground", children: /* @__PURE__ */ jsxs6("div", { className: "space-y-2 rounded-sm bg-slate-950 p-2", children: [
                    /* @__PURE__ */ jsxs6("div", { className: "space-y-2 rounded-md bg-slate-800 p-2 shadow-sm", children: [
                      /* @__PURE__ */ jsx16("div", { className: "h-2 w-[80px] rounded-lg bg-slate-400" }),
                      /* @__PURE__ */ jsx16("div", { className: "h-2 w-[100px] rounded-lg bg-slate-400" })
                    ] }),
                    /* @__PURE__ */ jsxs6("div", { className: "flex items-center space-x-2 rounded-md bg-slate-800 p-2 shadow-sm", children: [
                      /* @__PURE__ */ jsx16("div", { className: "h-4 w-4 rounded-full bg-slate-400" }),
                      /* @__PURE__ */ jsx16("div", { className: "h-2 w-[100px] rounded-lg bg-slate-400" })
                    ] }),
                    /* @__PURE__ */ jsxs6("div", { className: "flex items-center space-x-2 rounded-md bg-slate-800 p-2 shadow-sm", children: [
                      /* @__PURE__ */ jsx16("div", { className: "h-4 w-4 rounded-full bg-slate-400" }),
                      /* @__PURE__ */ jsx16("div", { className: "h-2 w-[100px] rounded-lg bg-slate-400" })
                    ] })
                  ] }) }),
                  /* @__PURE__ */ jsx16("span", { className: "block w-full p-2 text-center font-normal", children: "Dark" })
                ] }) })
              ]
            }
          )
        ] })
      }
    ),
    /* @__PURE__ */ jsx16(Button, { type: "submit", children: "Update preferences" })
  ] }) });
}

// app/routes/forms.appearance.tsx
import { jsx as jsx17, jsxs as jsxs7 } from "react/jsx-runtime";
function SettingsAppearancePage() {
  return /* @__PURE__ */ jsxs7("div", { className: "space-y-6", children: [
    /* @__PURE__ */ jsxs7("div", { children: [
      /* @__PURE__ */ jsx17("h3", { className: "text-lg font-medium", children: "Appearance" }),
      /* @__PURE__ */ jsx17("p", { className: "text-sm text-muted-foreground", children: "Customize the appearance of the app. Automatically switch between day and night themes." })
    ] }),
    /* @__PURE__ */ jsx17(Separator, {}),
    /* @__PURE__ */ jsx17(AppearanceForm, {})
  ] });
}

// app/routes/forms.account.tsx
var forms_account_exports = {};
__export(forms_account_exports, {
  default: () => FormsAccount
});

// app/components/forms/account-form.tsx
import { zodResolver as zodResolver3 } from "@hookform/resolvers/zod";
import { CalendarIcon, CaretSortIcon, CheckIcon } from "@radix-ui/react-icons";
import { format } from "date-fns";
import { useForm as useForm3 } from "react-hook-form";
import * as z3 from "zod";

// app/components/ui/calendar.tsx
import { ChevronLeft, ChevronRight } from "lucide-react";
import { DayPicker } from "react-day-picker";
import { jsx as jsx18 } from "react/jsx-runtime";
function Calendar({
  className,
  classNames,
  showOutsideDays = !0,
  ...props
}) {
  return /* @__PURE__ */ jsx18(
    DayPicker,
    {
      showOutsideDays,
      className: cn("p-3", className),
      classNames: {
        months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
        month: "space-y-4",
        caption: "flex justify-center pt-1 relative items-center",
        caption_label: "text-sm font-medium",
        nav: "space-x-1 flex items-center",
        nav_button: cn(
          buttonVariants({ variant: "outline" }),
          "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100"
        ),
        nav_button_previous: "absolute left-1",
        nav_button_next: "absolute right-1",
        table: "w-full border-collapse space-y-1",
        head_row: "flex",
        head_cell: "text-muted-foreground rounded-md w-9 font-normal text-[0.8rem]",
        row: "flex w-full mt-2",
        cell: "h-9 w-9 text-center text-sm p-0 relative [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
        day: cn(
          buttonVariants({ variant: "ghost" }),
          "h-9 w-9 p-0 font-normal aria-selected:opacity-100"
        ),
        day_range_end: "day-range-end",
        day_selected: "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground",
        day_today: "bg-accent text-accent-foreground",
        day_outside: "day-outside text-muted-foreground opacity-50 aria-selected:bg-accent/50 aria-selected:text-muted-foreground aria-selected:opacity-30",
        day_disabled: "text-muted-foreground opacity-50",
        day_range_middle: "aria-selected:bg-accent aria-selected:text-accent-foreground",
        day_hidden: "invisible",
        ...classNames
      },
      components: {
        IconLeft: ({ ...props2 }) => /* @__PURE__ */ jsx18(ChevronLeft, { className: "h-4 w-4" }),
        IconRight: ({ ...props2 }) => /* @__PURE__ */ jsx18(ChevronRight, { className: "h-4 w-4" })
      },
      ...props
    }
  );
}
Calendar.displayName = "Calendar";

// app/components/ui/command.tsx
import * as React12 from "react";
import { Command as CommandPrimitive } from "cmdk";
import { Search } from "lucide-react";

// app/components/ui/dialog.tsx
import * as React11 from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { jsx as jsx19, jsxs as jsxs8 } from "react/jsx-runtime";
var Dialog = DialogPrimitive.Root, DialogTrigger = DialogPrimitive.Trigger, DialogPortal = DialogPrimitive.Portal;
var DialogOverlay = React11.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx19(
  DialogPrimitive.Overlay,
  {
    ref,
    className: cn(
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    ),
    ...props
  }
));
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName;
var DialogContent = React11.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxs8(DialogPortal, { children: [
  /* @__PURE__ */ jsx19(DialogOverlay, {}),
  /* @__PURE__ */ jsxs8(
    DialogPrimitive.Content,
    {
      ref,
      className: cn(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
        className
      ),
      ...props,
      children: [
        children,
        /* @__PURE__ */ jsxs8(DialogPrimitive.Close, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground", children: [
          /* @__PURE__ */ jsx19(X, { className: "h-4 w-4" }),
          /* @__PURE__ */ jsx19("span", { className: "sr-only", children: "Close" })
        ] })
      ]
    }
  )
] }));
DialogContent.displayName = DialogPrimitive.Content.displayName;
var DialogHeader = ({
  className,
  ...props
}) => /* @__PURE__ */ jsx19(
  "div",
  {
    className: cn(
      "flex flex-col space-y-1.5 text-center sm:text-left",
      className
    ),
    ...props
  }
);
DialogHeader.displayName = "DialogHeader";
var DialogFooter = ({
  className,
  ...props
}) => /* @__PURE__ */ jsx19(
  "div",
  {
    className: cn(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      className
    ),
    ...props
  }
);
DialogFooter.displayName = "DialogFooter";
var DialogTitle = React11.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx19(
  DialogPrimitive.Title,
  {
    ref,
    className: cn(
      "text-lg font-semibold leading-none tracking-tight",
      className
    ),
    ...props
  }
));
DialogTitle.displayName = DialogPrimitive.Title.displayName;
var DialogDescription = React11.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx19(
  DialogPrimitive.Description,
  {
    ref,
    className: cn("text-sm text-muted-foreground", className),
    ...props
  }
));
DialogDescription.displayName = DialogPrimitive.Description.displayName;

// app/components/ui/command.tsx
import { jsx as jsx20, jsxs as jsxs9 } from "react/jsx-runtime";
var Command = React12.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx20(
  CommandPrimitive,
  {
    ref,
    className: cn(
      "flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground",
      className
    ),
    ...props
  }
));
Command.displayName = CommandPrimitive.displayName;
var CommandInput = React12.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxs9("div", { className: "flex items-center border-b px-3", "cmdk-input-wrapper": "", children: [
  /* @__PURE__ */ jsx20(Search, { className: "mr-2 h-4 w-4 shrink-0 opacity-50" }),
  /* @__PURE__ */ jsx20(
    CommandPrimitive.Input,
    {
      ref,
      className: cn(
        "flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50",
        className
      ),
      ...props
    }
  )
] }));
CommandInput.displayName = CommandPrimitive.Input.displayName;
var CommandList = React12.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx20(
  CommandPrimitive.List,
  {
    ref,
    className: cn("max-h-[300px] overflow-y-auto overflow-x-hidden", className),
    ...props
  }
));
CommandList.displayName = CommandPrimitive.List.displayName;
var CommandEmpty = React12.forwardRef((props, ref) => /* @__PURE__ */ jsx20(
  CommandPrimitive.Empty,
  {
    ref,
    className: "py-6 text-center text-sm",
    ...props
  }
));
CommandEmpty.displayName = CommandPrimitive.Empty.displayName;
var CommandGroup = React12.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx20(
  CommandPrimitive.Group,
  {
    ref,
    className: cn(
      "overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground",
      className
    ),
    ...props
  }
));
CommandGroup.displayName = CommandPrimitive.Group.displayName;
var CommandSeparator = React12.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx20(
  CommandPrimitive.Separator,
  {
    ref,
    className: cn("-mx-1 h-px bg-border", className),
    ...props
  }
));
CommandSeparator.displayName = CommandPrimitive.Separator.displayName;
var CommandItem = React12.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx20(
  CommandPrimitive.Item,
  {
    ref,
    className: cn(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none aria-selected:bg-accent aria-selected:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    ),
    ...props
  }
));
CommandItem.displayName = CommandPrimitive.Item.displayName;
var CommandShortcut = ({
  className,
  ...props
}) => /* @__PURE__ */ jsx20(
  "span",
  {
    className: cn(
      "ml-auto text-xs tracking-widest text-muted-foreground",
      className
    ),
    ...props
  }
);
CommandShortcut.displayName = "CommandShortcut";

// app/components/ui/popover.tsx
import * as React13 from "react";
import * as PopoverPrimitive from "@radix-ui/react-popover";
import { jsx as jsx21 } from "react/jsx-runtime";
var Popover = PopoverPrimitive.Root, PopoverTrigger = PopoverPrimitive.Trigger, PopoverContent = React13.forwardRef(({ className, align = "center", sideOffset = 4, ...props }, ref) => /* @__PURE__ */ jsx21(PopoverPrimitive.Portal, { children: /* @__PURE__ */ jsx21(
  PopoverPrimitive.Content,
  {
    ref,
    align,
    sideOffset,
    className: cn(
      "z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className
    ),
    ...props
  }
) }));
PopoverContent.displayName = PopoverPrimitive.Content.displayName;

// app/components/forms/account-form.tsx
import { jsx as jsx22, jsxs as jsxs10 } from "react/jsx-runtime";
var languages = [
  { label: "English", value: "en" },
  { label: "French", value: "fr" },
  { label: "German", value: "de" },
  { label: "Spanish", value: "es" },
  { label: "Portuguese", value: "pt" },
  { label: "Russian", value: "ru" },
  { label: "Japanese", value: "ja" },
  { label: "Korean", value: "ko" },
  { label: "Chinese", value: "zh" }
], accountFormSchema = z3.object({
  name: z3.string().min(2, {
    message: "Name must be at least 2 characters."
  }).max(30, {
    message: "Name must not be longer than 30 characters."
  }),
  dob: z3.date({
    required_error: "A date of birth is required."
  }),
  language: z3.string({
    required_error: "Please select a language."
  })
}), defaultValues3 = {
  // name: "Your name",
  // dob: new Date("2023-01-23"),
};
function AccountForm() {
  let form = useForm3({
    resolver: zodResolver3(accountFormSchema),
    defaultValues: defaultValues3
  });
  function onSubmit(data2) {
    toast({
      title: "You submitted the following values:",
      description: /* @__PURE__ */ jsx22("pre", { className: "mt-2 w-[340px] rounded-md bg-slate-950 p-4", children: /* @__PURE__ */ jsx22("code", { className: "text-white", children: JSON.stringify(data2, null, 2) }) })
    });
  }
  return /* @__PURE__ */ jsx22(Form, { ...form, children: /* @__PURE__ */ jsxs10("form", { onSubmit: form.handleSubmit(onSubmit), className: "space-y-8", children: [
    /* @__PURE__ */ jsx22(
      FormField,
      {
        control: form.control,
        name: "name",
        render: ({ field }) => /* @__PURE__ */ jsxs10(FormItem, { children: [
          /* @__PURE__ */ jsx22(FormLabel, { children: "Name" }),
          /* @__PURE__ */ jsx22(FormControl, { children: /* @__PURE__ */ jsx22(Input, { placeholder: "Your name", ...field }) }),
          /* @__PURE__ */ jsx22(FormDescription, { children: "This is the name that will be displayed on your profile and in emails." }),
          /* @__PURE__ */ jsx22(FormMessage, {})
        ] })
      }
    ),
    /* @__PURE__ */ jsx22(
      FormField,
      {
        control: form.control,
        name: "dob",
        render: ({ field }) => /* @__PURE__ */ jsxs10(FormItem, { className: "flex flex-col", children: [
          /* @__PURE__ */ jsx22(FormLabel, { children: "Date of birth" }),
          /* @__PURE__ */ jsxs10(Popover, { children: [
            /* @__PURE__ */ jsx22(PopoverTrigger, { asChild: !0, children: /* @__PURE__ */ jsx22(FormControl, { children: /* @__PURE__ */ jsxs10(
              Button,
              {
                variant: "outline",
                className: cn(
                  "w-[240px] pl-3 text-left font-normal",
                  !field.value && "text-muted-foreground"
                ),
                children: [
                  field.value ? format(field.value, "PPP") : /* @__PURE__ */ jsx22("span", { children: "Pick a date" }),
                  /* @__PURE__ */ jsx22(CalendarIcon, { className: "ml-auto h-4 w-4 opacity-50" })
                ]
              }
            ) }) }),
            /* @__PURE__ */ jsx22(PopoverContent, { className: "w-auto p-0", align: "start", children: /* @__PURE__ */ jsx22(
              Calendar,
              {
                mode: "single",
                selected: field.value,
                onSelect: field.onChange,
                disabled: (date2) => date2 > /* @__PURE__ */ new Date() || date2 < /* @__PURE__ */ new Date("1900-01-01"),
                initialFocus: !0
              }
            ) })
          ] }),
          /* @__PURE__ */ jsx22(FormDescription, { children: "Your date of birth is used to calculate your age." }),
          /* @__PURE__ */ jsx22(FormMessage, {})
        ] })
      }
    ),
    /* @__PURE__ */ jsx22(
      FormField,
      {
        control: form.control,
        name: "language",
        render: ({ field }) => /* @__PURE__ */ jsxs10(FormItem, { className: "flex flex-col", children: [
          /* @__PURE__ */ jsx22(FormLabel, { children: "Language" }),
          /* @__PURE__ */ jsxs10(Popover, { children: [
            /* @__PURE__ */ jsx22(PopoverTrigger, { asChild: !0, children: /* @__PURE__ */ jsx22(FormControl, { children: /* @__PURE__ */ jsxs10(
              Button,
              {
                variant: "outline",
                role: "combobox",
                className: cn(
                  "w-[200px] justify-between",
                  !field.value && "text-muted-foreground"
                ),
                children: [
                  field.value ? languages.find(
                    (language) => language.value === field.value
                  )?.label : "Select language",
                  /* @__PURE__ */ jsx22(CaretSortIcon, { className: "ml-2 h-4 w-4 shrink-0 opacity-50" })
                ]
              }
            ) }) }),
            /* @__PURE__ */ jsx22(PopoverContent, { className: "w-[200px] p-0", children: /* @__PURE__ */ jsxs10(Command, { children: [
              /* @__PURE__ */ jsx22(CommandInput, { placeholder: "Search language..." }),
              /* @__PURE__ */ jsx22(CommandEmpty, { children: "No language found." }),
              /* @__PURE__ */ jsx22(CommandGroup, { children: languages.map((language) => /* @__PURE__ */ jsxs10(
                CommandItem,
                {
                  value: language.label,
                  onSelect: () => {
                    form.setValue("language", language.value);
                  },
                  children: [
                    /* @__PURE__ */ jsx22(
                      CheckIcon,
                      {
                        className: cn(
                          "mr-2 h-4 w-4",
                          language.value === field.value ? "opacity-100" : "opacity-0"
                        )
                      }
                    ),
                    language.label
                  ]
                },
                language.value
              )) })
            ] }) })
          ] }),
          /* @__PURE__ */ jsx22(FormDescription, { children: "This is the language that will be used in the dashboard." }),
          /* @__PURE__ */ jsx22(FormMessage, {})
        ] })
      }
    ),
    /* @__PURE__ */ jsx22(Button, { type: "submit", children: "Update account" })
  ] }) });
}

// app/routes/forms.account.tsx
import { jsx as jsx23, jsxs as jsxs11 } from "react/jsx-runtime";
function FormsAccount() {
  return /* @__PURE__ */ jsxs11("div", { className: "space-y-6", children: [
    /* @__PURE__ */ jsxs11("div", { children: [
      /* @__PURE__ */ jsx23("h3", { className: "text-lg font-medium", children: "Account" }),
      /* @__PURE__ */ jsx23("p", { className: "text-sm text-muted-foreground", children: "Update your account settings. Set your preferred language and timezone." })
    ] }),
    /* @__PURE__ */ jsx23(Separator, {}),
    /* @__PURE__ */ jsx23(AccountForm, {})
  ] });
}

// app/routes/forms.display.tsx
var forms_display_exports = {};
__export(forms_display_exports, {
  default: () => SettingsDisplayPage
});

// app/components/forms/display-form.tsx
import { zodResolver as zodResolver4 } from "@hookform/resolvers/zod";
import { useForm as useForm4 } from "react-hook-form";
import * as z4 from "zod";

// app/components/ui/checkbox.tsx
import * as React14 from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { Check as Check2 } from "lucide-react";
import { jsx as jsx24 } from "react/jsx-runtime";
var Checkbox = React14.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx24(
  CheckboxPrimitive.Root,
  {
    ref,
    className: cn(
      "peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
      className
    ),
    ...props,
    children: /* @__PURE__ */ jsx24(
      CheckboxPrimitive.Indicator,
      {
        className: cn("flex items-center justify-center text-current"),
        children: /* @__PURE__ */ jsx24(Check2, { className: "h-4 w-4" })
      }
    )
  }
));
Checkbox.displayName = CheckboxPrimitive.Root.displayName;

// app/components/forms/display-form.tsx
import { jsx as jsx25, jsxs as jsxs12 } from "react/jsx-runtime";
var items = [
  {
    id: "recents",
    label: "Recents"
  },
  {
    id: "home",
    label: "Home"
  },
  {
    id: "applications",
    label: "Applications"
  },
  {
    id: "desktop",
    label: "Desktop"
  },
  {
    id: "downloads",
    label: "Downloads"
  },
  {
    id: "documents",
    label: "Documents"
  }
], displayFormSchema = z4.object({
  items: z4.array(z4.string()).refine((value) => value.some((item) => item), {
    message: "You have to select at least one item."
  })
}), defaultValues4 = {
  items: ["recents", "home"]
};
function DisplayForm() {
  let form = useForm4({
    resolver: zodResolver4(displayFormSchema),
    defaultValues: defaultValues4
  });
  function onSubmit(data2) {
    toast({
      title: "You submitted the following values:",
      description: /* @__PURE__ */ jsx25("pre", { className: "mt-2 w-[340px] rounded-md bg-slate-950 p-4", children: /* @__PURE__ */ jsx25("code", { className: "text-white", children: JSON.stringify(data2, null, 2) }) })
    });
  }
  return /* @__PURE__ */ jsx25(Form, { ...form, children: /* @__PURE__ */ jsxs12("form", { onSubmit: form.handleSubmit(onSubmit), className: "space-y-8", children: [
    /* @__PURE__ */ jsx25(
      FormField,
      {
        control: form.control,
        name: "items",
        render: () => /* @__PURE__ */ jsxs12(FormItem, { children: [
          /* @__PURE__ */ jsxs12("div", { className: "mb-4", children: [
            /* @__PURE__ */ jsx25(FormLabel, { className: "text-base", children: "Sidebar" }),
            /* @__PURE__ */ jsx25(FormDescription, { children: "Select the items you want to display in the sidebar." })
          ] }),
          items.map((item) => /* @__PURE__ */ jsx25(
            FormField,
            {
              control: form.control,
              name: "items",
              render: ({ field }) => /* @__PURE__ */ jsxs12(
                FormItem,
                {
                  className: "flex flex-row items-start space-x-3 space-y-0",
                  children: [
                    /* @__PURE__ */ jsx25(FormControl, { children: /* @__PURE__ */ jsx25(
                      Checkbox,
                      {
                        checked: field.value?.includes(item.id),
                        onCheckedChange: (checked) => checked ? field.onChange([...field.value, item.id]) : field.onChange(
                          field.value?.filter(
                            (value) => value !== item.id
                          )
                        )
                      }
                    ) }),
                    /* @__PURE__ */ jsx25(FormLabel, { className: "font-normal", children: item.label })
                  ]
                },
                item.id
              )
            },
            item.id
          )),
          /* @__PURE__ */ jsx25(FormMessage, {})
        ] })
      }
    ),
    /* @__PURE__ */ jsx25(Button, { type: "submit", children: "Update display" })
  ] }) });
}

// app/routes/forms.display.tsx
import { jsx as jsx26, jsxs as jsxs13 } from "react/jsx-runtime";
function SettingsDisplayPage() {
  return /* @__PURE__ */ jsxs13("div", { className: "space-y-6", children: [
    /* @__PURE__ */ jsxs13("div", { children: [
      /* @__PURE__ */ jsx26("h3", { className: "text-lg font-medium", children: "Display" }),
      /* @__PURE__ */ jsx26("p", { className: "text-sm text-muted-foreground", children: "Turn items on or off to control what's displayed in the app." })
    ] }),
    /* @__PURE__ */ jsx26(Separator, {}),
    /* @__PURE__ */ jsx26(DisplayForm, {})
  ] });
}

// app/routes/forms.profile.tsx
var forms_profile_exports = {};
__export(forms_profile_exports, {
  default: () => FormsProfile
});
import { jsx as jsx27, jsxs as jsxs14 } from "react/jsx-runtime";
function FormsProfile() {
  return /* @__PURE__ */ jsxs14("div", { className: "space-y-6", children: [
    /* @__PURE__ */ jsxs14("div", { children: [
      /* @__PURE__ */ jsx27("h3", { className: "text-lg font-medium", children: "Profile" }),
      /* @__PURE__ */ jsx27("p", { className: "text-sm text-muted-foreground", children: "This is how others will see you on the site." })
    ] }),
    /* @__PURE__ */ jsx27(Separator, {}),
    /* @__PURE__ */ jsx27(ProfileForm, {})
  ] });
}

// app/routes/dashboard.tsx
var dashboard_exports = {};
__export(dashboard_exports, {
  default: () => DashboardPage
});

// app/components/ui/card.tsx
import * as React15 from "react";
import { jsx as jsx28 } from "react/jsx-runtime";
var Card = React15.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx28(
  "div",
  {
    ref,
    className: cn(
      "rounded-lg border bg-card text-card-foreground shadow-sm",
      className
    ),
    ...props
  }
));
Card.displayName = "Card";
var CardHeader = React15.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx28(
  "div",
  {
    ref,
    className: cn("flex flex-col space-y-1.5 p-6", className),
    ...props
  }
));
CardHeader.displayName = "CardHeader";
var CardTitle = React15.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx28(
  "h3",
  {
    ref,
    className: cn(
      "text-2xl font-semibold leading-none tracking-tight",
      className
    ),
    ...props
  }
));
CardTitle.displayName = "CardTitle";
var CardDescription = React15.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx28(
  "p",
  {
    ref,
    className: cn("text-sm text-muted-foreground", className),
    ...props
  }
));
CardDescription.displayName = "CardDescription";
var CardContent = React15.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx28("div", { ref, className: cn("p-6 pt-0", className), ...props }));
CardContent.displayName = "CardContent";
var CardFooter = React15.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx28(
  "div",
  {
    ref,
    className: cn("flex items-center p-6 pt-0", className),
    ...props
  }
));
CardFooter.displayName = "CardFooter";

// app/components/dashboard/date-range-picker.tsx
import * as React16 from "react";
import { addDays, format as format2 } from "date-fns";
import { Fragment, jsx as jsx29, jsxs as jsxs15 } from "react/jsx-runtime";
function CalendarDateRangePicker({
  className
}) {
  let [date2, setDate] = React16.useState({
    from: new Date(2023, 0, 20),
    to: addDays(new Date(2023, 0, 20), 20)
  });
  return /* @__PURE__ */ jsx29("div", { className: cn("grid gap-2", className), children: /* @__PURE__ */ jsxs15(Popover, { children: [
    /* @__PURE__ */ jsx29(PopoverTrigger, { asChild: !0, children: /* @__PURE__ */ jsx29(
      Button,
      {
        id: "date",
        variant: "outline",
        className: cn(
          "w-[260px] justify-start text-left font-normal",
          !date2 && "text-muted-foreground"
        ),
        children: date2?.from ? date2.to ? /* @__PURE__ */ jsxs15(Fragment, { children: [
          format2(date2.from, "LLL dd, y"),
          " -",
          " ",
          format2(date2.to, "LLL dd, y")
        ] }) : format2(date2.from, "LLL dd, y") : /* @__PURE__ */ jsx29("span", { children: "Pick a date" })
      }
    ) }),
    /* @__PURE__ */ jsx29(PopoverContent, { className: "w-auto p-0", align: "end", children: /* @__PURE__ */ jsx29(
      Calendar,
      {
        initialFocus: !0,
        mode: "range",
        defaultMonth: date2?.from,
        selected: date2,
        onSelect: setDate,
        numberOfMonths: 2
      }
    ) })
  ] }) });
}

// app/components/dashboard/main-nav.tsx
import { jsx as jsx30, jsxs as jsxs16 } from "react/jsx-runtime";
function MainNav({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxs16(
    "nav",
    {
      className: cn("flex items-center space-x-4 lg:space-x-6", className),
      ...props,
      children: [
        /* @__PURE__ */ jsx30("div", { className: "text-sm font-medium transition-colors hover:text-primary", children: "Overview" }),
        /* @__PURE__ */ jsx30("div", { className: "text-sm font-medium text-muted-foreground transition-colors hover:text-primary", children: "Customers" }),
        /* @__PURE__ */ jsx30("div", { className: "text-sm font-medium text-muted-foreground transition-colors hover:text-primary", children: "Products" }),
        /* @__PURE__ */ jsx30("div", { className: "text-sm font-medium text-muted-foreground transition-colors hover:text-primary", children: "Settings" })
      ]
    }
  );
}

// app/components/dashboard/overview.tsx
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";
import { jsx as jsx31, jsxs as jsxs17 } from "react/jsx-runtime";
var data = [
  {
    name: "Jan",
    total: Math.floor(Math.random() * 5e3) + 1e3
  },
  {
    name: "Feb",
    total: Math.floor(Math.random() * 5e3) + 1e3
  },
  {
    name: "Mar",
    total: Math.floor(Math.random() * 5e3) + 1e3
  },
  {
    name: "Apr",
    total: Math.floor(Math.random() * 5e3) + 1e3
  },
  {
    name: "May",
    total: Math.floor(Math.random() * 5e3) + 1e3
  },
  {
    name: "Jun",
    total: Math.floor(Math.random() * 5e3) + 1e3
  },
  {
    name: "Jul",
    total: Math.floor(Math.random() * 5e3) + 1e3
  },
  {
    name: "Aug",
    total: Math.floor(Math.random() * 5e3) + 1e3
  },
  {
    name: "Sep",
    total: Math.floor(Math.random() * 5e3) + 1e3
  },
  {
    name: "Oct",
    total: Math.floor(Math.random() * 5e3) + 1e3
  },
  {
    name: "Nov",
    total: Math.floor(Math.random() * 5e3) + 1e3
  },
  {
    name: "Dec",
    total: Math.floor(Math.random() * 5e3) + 1e3
  }
];
function Overview() {
  return /* @__PURE__ */ jsx31(ResponsiveContainer, { width: "100%", height: 350, children: /* @__PURE__ */ jsxs17(BarChart, { data, children: [
    /* @__PURE__ */ jsx31(
      XAxis,
      {
        dataKey: "name",
        stroke: "#888888",
        fontSize: 12,
        tickLine: !1,
        axisLine: !1
      }
    ),
    /* @__PURE__ */ jsx31(
      YAxis,
      {
        stroke: "#888888",
        fontSize: 12,
        tickLine: !1,
        axisLine: !1,
        tickFormatter: (value) => `$${value}`
      }
    ),
    /* @__PURE__ */ jsx31(
      Bar,
      {
        dataKey: "total",
        fill: "currentColor",
        radius: [4, 4, 0, 0],
        className: "fill-primary"
      }
    )
  ] }) });
}

// app/components/ui/avatar.tsx
import * as React17 from "react";
import * as AvatarPrimitive from "@radix-ui/react-avatar";
import { jsx as jsx32 } from "react/jsx-runtime";
var Avatar = React17.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx32(
  AvatarPrimitive.Root,
  {
    ref,
    className: cn(
      "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",
      className
    ),
    ...props
  }
));
Avatar.displayName = AvatarPrimitive.Root.displayName;
var AvatarImage = React17.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx32(
  AvatarPrimitive.Image,
  {
    ref,
    className: cn("aspect-square h-full w-full", className),
    ...props
  }
));
AvatarImage.displayName = AvatarPrimitive.Image.displayName;
var AvatarFallback = React17.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx32(
  AvatarPrimitive.Fallback,
  {
    ref,
    className: cn(
      "flex h-full w-full items-center justify-center rounded-full bg-muted",
      className
    ),
    ...props
  }
));
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName;

// assets/01.png
var __default = "/build/_assets/01-5XYUD42Q.png";

// assets/02.png
var __default2 = "/build/_assets/02-UJIV2ZX2.png";

// assets/03.png
var __default3 = "/build/_assets/03-LF5MTIWL.png";

// assets/04.png
var __default4 = "/build/_assets/04-JU5EDWVV.png";

// assets/05.png
var __default5 = "/build/_assets/05-LRUIKTEW.png";

// app/components/dashboard/recent-sales.tsx
import { jsx as jsx33, jsxs as jsxs18 } from "react/jsx-runtime";
function RecentSales() {
  return /* @__PURE__ */ jsxs18("div", { className: "space-y-8", children: [
    /* @__PURE__ */ jsxs18("div", { className: "flex items-center", children: [
      /* @__PURE__ */ jsxs18(Avatar, { className: "h-9 w-9", children: [
        /* @__PURE__ */ jsx33(AvatarImage, { src: __default, alt: "Avatar" }),
        /* @__PURE__ */ jsx33(AvatarFallback, { children: "OM" })
      ] }),
      /* @__PURE__ */ jsxs18("div", { className: "ml-4 space-y-1", children: [
        /* @__PURE__ */ jsx33("p", { className: "text-sm font-medium leading-none", children: "Olivia Martin" }),
        /* @__PURE__ */ jsx33("p", { className: "text-sm text-muted-foreground", children: "olivia.martin@email.com" })
      ] }),
      /* @__PURE__ */ jsx33("div", { className: "ml-auto font-medium", children: "+$1,999.00" })
    ] }),
    /* @__PURE__ */ jsxs18("div", { className: "flex items-center", children: [
      /* @__PURE__ */ jsxs18(Avatar, { className: "flex h-9 w-9 items-center justify-center space-y-0 border", children: [
        /* @__PURE__ */ jsx33(AvatarImage, { src: __default2, alt: "Avatar" }),
        /* @__PURE__ */ jsx33(AvatarFallback, { children: "JL" })
      ] }),
      /* @__PURE__ */ jsxs18("div", { className: "ml-4 space-y-1", children: [
        /* @__PURE__ */ jsx33("p", { className: "text-sm font-medium leading-none", children: "Jackson Lee" }),
        /* @__PURE__ */ jsx33("p", { className: "text-sm text-muted-foreground", children: "jackson.lee@email.com" })
      ] }),
      /* @__PURE__ */ jsx33("div", { className: "ml-auto font-medium", children: "+$39.00" })
    ] }),
    /* @__PURE__ */ jsxs18("div", { className: "flex items-center", children: [
      /* @__PURE__ */ jsxs18(Avatar, { className: "h-9 w-9", children: [
        /* @__PURE__ */ jsx33(AvatarImage, { src: __default3, alt: "Avatar" }),
        /* @__PURE__ */ jsx33(AvatarFallback, { children: "IN" })
      ] }),
      /* @__PURE__ */ jsxs18("div", { className: "ml-4 space-y-1", children: [
        /* @__PURE__ */ jsx33("p", { className: "text-sm font-medium leading-none", children: "Isabella Nguyen" }),
        /* @__PURE__ */ jsx33("p", { className: "text-sm text-muted-foreground", children: "isabella.nguyen@email.com" })
      ] }),
      /* @__PURE__ */ jsx33("div", { className: "ml-auto font-medium", children: "+$299.00" })
    ] }),
    /* @__PURE__ */ jsxs18("div", { className: "flex items-center", children: [
      /* @__PURE__ */ jsxs18(Avatar, { className: "h-9 w-9", children: [
        /* @__PURE__ */ jsx33(AvatarImage, { src: __default4, alt: "Avatar" }),
        /* @__PURE__ */ jsx33(AvatarFallback, { children: "WK" })
      ] }),
      /* @__PURE__ */ jsxs18("div", { className: "ml-4 space-y-1", children: [
        /* @__PURE__ */ jsx33("p", { className: "text-sm font-medium leading-none", children: "William Kim" }),
        /* @__PURE__ */ jsx33("p", { className: "text-sm text-muted-foreground", children: "will@email.com" })
      ] }),
      /* @__PURE__ */ jsx33("div", { className: "ml-auto font-medium", children: "+$99.00" })
    ] }),
    /* @__PURE__ */ jsxs18("div", { className: "flex items-center", children: [
      /* @__PURE__ */ jsxs18(Avatar, { className: "h-9 w-9", children: [
        /* @__PURE__ */ jsx33(AvatarImage, { src: __default5, alt: "Avatar" }),
        /* @__PURE__ */ jsx33(AvatarFallback, { children: "SD" })
      ] }),
      /* @__PURE__ */ jsxs18("div", { className: "ml-4 space-y-1", children: [
        /* @__PURE__ */ jsx33("p", { className: "text-sm font-medium leading-none", children: "Sofia Davis" }),
        /* @__PURE__ */ jsx33("p", { className: "text-sm text-muted-foreground", children: "sofia.davis@email.com" })
      ] }),
      /* @__PURE__ */ jsx33("div", { className: "ml-auto font-medium", children: "+$39.00" })
    ] })
  ] });
}

// app/components/dashboard/search.tsx
import { jsx as jsx34 } from "react/jsx-runtime";
function Search2() {
  return /* @__PURE__ */ jsx34("div", { children: /* @__PURE__ */ jsx34(
    Input,
    {
      type: "search",
      placeholder: "Search...",
      className: "md:w-[100px] lg:w-[300px]"
    }
  ) });
}

// app/components/dashboard/team-switcher.tsx
import * as React18 from "react";
import {
  CaretSortIcon as CaretSortIcon2,
  CheckIcon as CheckIcon2,
  PlusCircledIcon
} from "@radix-ui/react-icons";
import { jsx as jsx35, jsxs as jsxs19 } from "react/jsx-runtime";
var groups = [
  {
    label: "Personal Account",
    teams: [
      {
        label: "Alicia Koch",
        value: "personal"
      }
    ]
  },
  {
    label: "Teams",
    teams: [
      {
        label: "Acme Inc.",
        value: "acme-inc"
      },
      {
        label: "Monsters Inc.",
        value: "monsters"
      }
    ]
  }
];
function TeamSwitcher({ className }) {
  let [open, setOpen] = React18.useState(!1), [showNewTeamDialog, setShowNewTeamDialog] = React18.useState(!1), [selectedTeam, setSelectedTeam] = React18.useState(
    groups[0].teams[0]
  );
  return /* @__PURE__ */ jsxs19(Dialog, { open: showNewTeamDialog, onOpenChange: setShowNewTeamDialog, children: [
    /* @__PURE__ */ jsxs19(Popover, { open, onOpenChange: setOpen, children: [
      /* @__PURE__ */ jsx35(PopoverTrigger, { asChild: !0, children: /* @__PURE__ */ jsxs19(
        Button,
        {
          variant: "outline",
          role: "combobox",
          "aria-expanded": open,
          "aria-label": "Select a team",
          className: cn("w-[200px] justify-between", className),
          children: [
            /* @__PURE__ */ jsxs19(Avatar, { className: "mr-2 h-5 w-5", children: [
              /* @__PURE__ */ jsx35(
                AvatarImage,
                {
                  src: `https://avatar.vercel.sh/${selectedTeam.value}.png`,
                  alt: selectedTeam.label,
                  className: "grayscale"
                }
              ),
              /* @__PURE__ */ jsx35(AvatarFallback, { children: "SC" })
            ] }),
            selectedTeam.label,
            /* @__PURE__ */ jsx35(CaretSortIcon2, { className: "ml-auto h-4 w-4 shrink-0 opacity-50" })
          ]
        }
      ) }),
      /* @__PURE__ */ jsx35(PopoverContent, { className: "w-[200px] p-0", children: /* @__PURE__ */ jsxs19(Command, { children: [
        /* @__PURE__ */ jsxs19(CommandList, { children: [
          /* @__PURE__ */ jsx35(CommandInput, { placeholder: "Search team..." }),
          /* @__PURE__ */ jsx35(CommandEmpty, { children: "No team found." }),
          groups.map((group) => /* @__PURE__ */ jsx35(CommandGroup, { heading: group.label, children: group.teams.map((team) => /* @__PURE__ */ jsxs19(
            CommandItem,
            {
              onSelect: () => {
                setSelectedTeam(team), setOpen(!1);
              },
              className: "text-sm",
              children: [
                /* @__PURE__ */ jsxs19(Avatar, { className: "mr-2 h-5 w-5", children: [
                  /* @__PURE__ */ jsx35(
                    AvatarImage,
                    {
                      src: `https://avatar.vercel.sh/${team.value}.png`,
                      alt: team.label,
                      className: "grayscale"
                    }
                  ),
                  /* @__PURE__ */ jsx35(AvatarFallback, { children: "SC" })
                ] }),
                team.label,
                /* @__PURE__ */ jsx35(
                  CheckIcon2,
                  {
                    className: cn(
                      "ml-auto h-4 w-4",
                      selectedTeam.value === team.value ? "opacity-100" : "opacity-0"
                    )
                  }
                )
              ]
            },
            team.value
          )) }, group.label))
        ] }),
        /* @__PURE__ */ jsx35(CommandSeparator, {}),
        /* @__PURE__ */ jsx35(CommandList, { children: /* @__PURE__ */ jsx35(CommandGroup, { children: /* @__PURE__ */ jsx35(DialogTrigger, { asChild: !0, children: /* @__PURE__ */ jsxs19(
          CommandItem,
          {
            onSelect: () => {
              setOpen(!1), setShowNewTeamDialog(!0);
            },
            children: [
              /* @__PURE__ */ jsx35(PlusCircledIcon, { className: "mr-2 h-5 w-5" }),
              "Create Team"
            ]
          }
        ) }) }) })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxs19(DialogContent, { children: [
      /* @__PURE__ */ jsxs19(DialogHeader, { children: [
        /* @__PURE__ */ jsx35(DialogTitle, { children: "Create team" }),
        /* @__PURE__ */ jsx35(DialogDescription, { children: "Add a new team to manage products and customers." })
      ] }),
      /* @__PURE__ */ jsx35("div", { children: /* @__PURE__ */ jsxs19("div", { className: "space-y-4 py-2 pb-4", children: [
        /* @__PURE__ */ jsxs19("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsx35(Label, { htmlFor: "name", children: "Team name" }),
          /* @__PURE__ */ jsx35(Input, { id: "name", placeholder: "Acme Inc." })
        ] }),
        /* @__PURE__ */ jsxs19("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsx35(Label, { htmlFor: "plan", children: "Subscription plan" }),
          /* @__PURE__ */ jsxs19(Select, { children: [
            /* @__PURE__ */ jsx35(SelectTrigger, { children: /* @__PURE__ */ jsx35(SelectValue, { placeholder: "Select a plan" }) }),
            /* @__PURE__ */ jsxs19(SelectContent, { children: [
              /* @__PURE__ */ jsxs19(SelectItem, { value: "free", children: [
                /* @__PURE__ */ jsx35("span", { className: "font-medium", children: "Free" }),
                " -",
                " ",
                /* @__PURE__ */ jsx35("span", { className: "text-muted-foreground", children: "Trial for two weeks" })
              ] }),
              /* @__PURE__ */ jsxs19(SelectItem, { value: "pro", children: [
                /* @__PURE__ */ jsx35("span", { className: "font-medium", children: "Pro" }),
                " -",
                " ",
                /* @__PURE__ */ jsx35("span", { className: "text-muted-foreground", children: "$9/month per user" })
              ] })
            ] })
          ] })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxs19(DialogFooter, { children: [
        /* @__PURE__ */ jsx35(Button, { variant: "outline", onClick: () => setShowNewTeamDialog(!1), children: "Cancel" }),
        /* @__PURE__ */ jsx35(Button, { type: "submit", children: "Continue" })
      ] })
    ] })
  ] });
}

// app/components/ui/dropdown-menu.tsx
import * as React19 from "react";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { Check as Check3, ChevronRight as ChevronRight2, Circle as Circle2 } from "lucide-react";
import { jsx as jsx36, jsxs as jsxs20 } from "react/jsx-runtime";
var DropdownMenu = DropdownMenuPrimitive.Root, DropdownMenuTrigger = DropdownMenuPrimitive.Trigger, DropdownMenuGroup = DropdownMenuPrimitive.Group;
var DropdownMenuSub = DropdownMenuPrimitive.Sub, DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup, DropdownMenuSubTrigger = React19.forwardRef(({ className, inset, children, ...props }, ref) => /* @__PURE__ */ jsxs20(
  DropdownMenuPrimitive.SubTrigger,
  {
    ref,
    className: cn(
      "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent",
      inset && "pl-8",
      className
    ),
    ...props,
    children: [
      children,
      /* @__PURE__ */ jsx36(ChevronRight2, { className: "ml-auto h-4 w-4" })
    ]
  }
));
DropdownMenuSubTrigger.displayName = DropdownMenuPrimitive.SubTrigger.displayName;
var DropdownMenuSubContent = React19.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx36(
  DropdownMenuPrimitive.SubContent,
  {
    ref,
    className: cn(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className
    ),
    ...props
  }
));
DropdownMenuSubContent.displayName = DropdownMenuPrimitive.SubContent.displayName;
var DropdownMenuContent = React19.forwardRef(({ className, sideOffset = 4, ...props }, ref) => /* @__PURE__ */ jsx36(DropdownMenuPrimitive.Portal, { children: /* @__PURE__ */ jsx36(
  DropdownMenuPrimitive.Content,
  {
    ref,
    sideOffset,
    className: cn(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className
    ),
    ...props
  }
) }));
DropdownMenuContent.displayName = DropdownMenuPrimitive.Content.displayName;
var DropdownMenuItem = React19.forwardRef(({ className, inset, ...props }, ref) => /* @__PURE__ */ jsx36(
  DropdownMenuPrimitive.Item,
  {
    ref,
    className: cn(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      inset && "pl-8",
      className
    ),
    ...props
  }
));
DropdownMenuItem.displayName = DropdownMenuPrimitive.Item.displayName;
var DropdownMenuCheckboxItem = React19.forwardRef(({ className, children, checked, ...props }, ref) => /* @__PURE__ */ jsxs20(
  DropdownMenuPrimitive.CheckboxItem,
  {
    ref,
    className: cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    ),
    checked,
    ...props,
    children: [
      /* @__PURE__ */ jsx36("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ jsx36(DropdownMenuPrimitive.ItemIndicator, { children: /* @__PURE__ */ jsx36(Check3, { className: "h-4 w-4" }) }) }),
      children
    ]
  }
));
DropdownMenuCheckboxItem.displayName = DropdownMenuPrimitive.CheckboxItem.displayName;
var DropdownMenuRadioItem = React19.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxs20(
  DropdownMenuPrimitive.RadioItem,
  {
    ref,
    className: cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    ),
    ...props,
    children: [
      /* @__PURE__ */ jsx36("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ jsx36(DropdownMenuPrimitive.ItemIndicator, { children: /* @__PURE__ */ jsx36(Circle2, { className: "h-2 w-2 fill-current" }) }) }),
      children
    ]
  }
));
DropdownMenuRadioItem.displayName = DropdownMenuPrimitive.RadioItem.displayName;
var DropdownMenuLabel = React19.forwardRef(({ className, inset, ...props }, ref) => /* @__PURE__ */ jsx36(
  DropdownMenuPrimitive.Label,
  {
    ref,
    className: cn(
      "px-2 py-1.5 text-sm font-semibold",
      inset && "pl-8",
      className
    ),
    ...props
  }
));
DropdownMenuLabel.displayName = DropdownMenuPrimitive.Label.displayName;
var DropdownMenuSeparator = React19.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx36(
  DropdownMenuPrimitive.Separator,
  {
    ref,
    className: cn("-mx-1 my-1 h-px bg-muted", className),
    ...props
  }
));
DropdownMenuSeparator.displayName = DropdownMenuPrimitive.Separator.displayName;
var DropdownMenuShortcut = ({
  className,
  ...props
}) => /* @__PURE__ */ jsx36(
  "span",
  {
    className: cn("ml-auto text-xs tracking-widest opacity-60", className),
    ...props
  }
);
DropdownMenuShortcut.displayName = "DropdownMenuShortcut";

// app/components/dashboard/user-nav.tsx
import { jsx as jsx37, jsxs as jsxs21 } from "react/jsx-runtime";
function UserNav() {
  return /* @__PURE__ */ jsxs21(DropdownMenu, { children: [
    /* @__PURE__ */ jsx37(DropdownMenuTrigger, { asChild: !0, children: /* @__PURE__ */ jsx37(Button, { variant: "ghost", className: "relative h-8 w-8 rounded-full", children: /* @__PURE__ */ jsxs21(Avatar, { className: "h-8 w-8", children: [
      /* @__PURE__ */ jsx37(AvatarImage, { src: __default, alt: "@shadcn" }),
      /* @__PURE__ */ jsx37(AvatarFallback, { children: "SC" })
    ] }) }) }),
    /* @__PURE__ */ jsxs21(DropdownMenuContent, { className: "w-56", align: "end", forceMount: !0, children: [
      /* @__PURE__ */ jsx37(DropdownMenuLabel, { className: "font-normal", children: /* @__PURE__ */ jsxs21("div", { className: "flex flex-col space-y-1", children: [
        /* @__PURE__ */ jsx37("p", { className: "text-sm font-medium leading-none", children: "shadcn" }),
        /* @__PURE__ */ jsx37("p", { className: "text-xs leading-none text-muted-foreground", children: "m@example.com" })
      ] }) }),
      /* @__PURE__ */ jsx37(DropdownMenuSeparator, {}),
      /* @__PURE__ */ jsxs21(DropdownMenuGroup, { children: [
        /* @__PURE__ */ jsxs21(DropdownMenuItem, { children: [
          "Profile",
          /* @__PURE__ */ jsx37(DropdownMenuShortcut, { children: "\u21E7\u2318P" })
        ] }),
        /* @__PURE__ */ jsxs21(DropdownMenuItem, { children: [
          "Billing",
          /* @__PURE__ */ jsx37(DropdownMenuShortcut, { children: "\u2318B" })
        ] }),
        /* @__PURE__ */ jsxs21(DropdownMenuItem, { children: [
          "Settings",
          /* @__PURE__ */ jsx37(DropdownMenuShortcut, { children: "\u2318S" })
        ] }),
        /* @__PURE__ */ jsx37(DropdownMenuItem, { children: "New Team" })
      ] }),
      /* @__PURE__ */ jsx37(DropdownMenuSeparator, {}),
      /* @__PURE__ */ jsxs21(DropdownMenuItem, { children: [
        "Log out",
        /* @__PURE__ */ jsx37(DropdownMenuShortcut, { children: "\u21E7\u2318Q" })
      ] })
    ] })
  ] });
}

// app/components/dashboard/dashboard-card.tsx
import { jsx as jsx38, jsxs as jsxs22 } from "react/jsx-runtime";
function DashboardCard({
  title,
  content,
  subTitle,
  icon
}) {
  return /* @__PURE__ */ jsxs22(Card, { children: [
    /* @__PURE__ */ jsxs22(CardHeader, { className: "flex flex-row items-center justify-between space-y-0 pb-2", children: [
      /* @__PURE__ */ jsx38(CardTitle, { className: "text-sm font-medium", children: title }),
      /* @__PURE__ */ jsx38("img", { src: icon, width: 16, alt: "" })
    ] }),
    /* @__PURE__ */ jsxs22(CardContent, { children: [
      /* @__PURE__ */ jsx38("div", { className: "text-2xl font-bold", children: content }),
      /* @__PURE__ */ jsx38("p", { className: "text-xs text-muted-foreground", children: subTitle })
    ] })
  ] });
}

// assets/images/dashboard/card_1.svg
var card_1_default = "/build/_assets/card_1-P3AEJYIS.svg";

// assets/images/dashboard/card_2.svg
var card_2_default = "/build/_assets/card_2-SFYZQ2KC.svg";

// assets/images/dashboard/card_3.svg
var card_3_default = "/build/_assets/card_3-5QDOTBZI.svg";

// assets/images/dashboard/card_4.svg
var card_4_default = "/build/_assets/card_4-AVUP5CC3.svg";

// app/routes/dashboard.tsx
import { jsx as jsx39, jsxs as jsxs23 } from "react/jsx-runtime";
var cardItems = [
  {
    title: "Total Revenue",
    content: "$45,231.89",
    subTitle: "+20.1% from last month",
    icon: card_1_default
  },
  {
    title: "Subscriptions",
    content: "+2350",
    subTitle: "+180.1% from last month",
    icon: card_2_default
  },
  {
    title: "Sales",
    content: "+12,234",
    subTitle: "+19% from last month",
    icon: card_3_default
  },
  {
    title: "Active Now",
    content: "+573",
    subTitle: "+201 since last hour",
    icon: card_4_default
  }
], tabListItems = [
  {
    title: "Overview",
    value: "overview",
    disabled: !1
  },
  {
    title: "Analytics",
    value: "analytics",
    disabled: !0
  },
  {
    title: "Reports",
    value: "reports",
    disabled: !0
  },
  {
    title: "Notifications",
    value: "notifications",
    disabled: !0
  }
];
function DashboardPage() {
  return /* @__PURE__ */ jsxs23("div", { className: "hidden flex-col md:flex", children: [
    /* @__PURE__ */ jsx39("div", { className: "border-b", children: /* @__PURE__ */ jsxs23("div", { className: "flex h-16 items-center px-4", children: [
      /* @__PURE__ */ jsx39(TeamSwitcher, {}),
      /* @__PURE__ */ jsx39(MainNav, { className: "mx-6" }),
      /* @__PURE__ */ jsxs23("div", { className: "ml-auto flex items-center space-x-4", children: [
        /* @__PURE__ */ jsx39(Search2, {}),
        /* @__PURE__ */ jsx39(UserNav, {})
      ] })
    ] }) }),
    /* @__PURE__ */ jsxs23("div", { className: "flex-1 space-y-4 p-8 pt-6", children: [
      /* @__PURE__ */ jsxs23("div", { className: "flex items-center justify-between space-y-2", children: [
        /* @__PURE__ */ jsx39("h2", { className: "text-3xl font-bold tracking-tight", children: "Dashboard" }),
        /* @__PURE__ */ jsxs23("div", { className: "flex items-center space-x-2", children: [
          /* @__PURE__ */ jsx39(CalendarDateRangePicker, {}),
          /* @__PURE__ */ jsx39(Button, { children: "Download" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs23(Tabs, { defaultValue: "overview", className: "space-y-4", children: [
        /* @__PURE__ */ jsx39(TabsList, { children: tabListItems.map((e, index) => /* @__PURE__ */ jsx39(TabsTrigger, { value: e.value, disabled: e.disabled, children: e.title }, index)) }),
        /* @__PURE__ */ jsxs23(TabsContent, { value: "overview", className: "space-y-4", children: [
          /* @__PURE__ */ jsx39("div", { className: "grid gap-4 md:grid-cols-2 lg:grid-cols-4", children: cardItems.map((el, index) => /* @__PURE__ */ jsx39(
            DashboardCard,
            {
              title: el.title,
              content: el.content,
              subTitle: el.subTitle,
              icon: el.icon
            },
            index
          )) }),
          /* @__PURE__ */ jsxs23("div", { className: "grid gap-4 md:grid-cols-2 lg:grid-cols-7", children: [
            /* @__PURE__ */ jsxs23(Card, { className: "col-span-4", children: [
              /* @__PURE__ */ jsx39(CardHeader, { children: /* @__PURE__ */ jsx39(CardTitle, { children: "Overview" }) }),
              /* @__PURE__ */ jsx39(CardContent, { className: "pl-2", children: /* @__PURE__ */ jsx39(Overview, {}) })
            ] }),
            /* @__PURE__ */ jsxs23(Card, { className: "col-span-3", children: [
              /* @__PURE__ */ jsxs23(CardHeader, { children: [
                /* @__PURE__ */ jsx39(CardTitle, { children: "Recent Sales" }),
                /* @__PURE__ */ jsx39(CardDescription, { children: "You made 265 sales this month." })
              ] }),
              /* @__PURE__ */ jsx39(CardContent, { children: /* @__PURE__ */ jsx39(RecentSales, {}) })
            ] })
          ] })
        ] })
      ] })
    ] })
  ] });
}

// app/routes/_index.tsx
var index_exports = {};
__export(index_exports, {
  default: () => Index,
  meta: () => meta
});
import { jsx as jsx40 } from "react/jsx-runtime";
var meta = () => [
  { title: "New Remix App" },
  { name: "description", content: "Welcome to Remix!" }
];
function Index() {
  return /* @__PURE__ */ jsx40("div", { style: { fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }, children: "MAIN" });
}

// app/routes/forms.tsx
var forms_exports = {};
__export(forms_exports, {
  default: () => Forms,
  metadata: () => metadata
});

// app/components/forms/sidebar-nav.tsx
import { jsx as jsx41 } from "react/jsx-runtime";
function SidebarNav({ className, items: items2, ...props }) {
  return /* @__PURE__ */ jsx41(
    "nav",
    {
      className: cn(
        "flex space-x-2 lg:flex-col lg:space-x-0 lg:space-y-1",
        className
      ),
      ...props,
      children: items2.map((item) => /* @__PURE__ */ jsx41(
        "a",
        {
          href: item.href,
          className: cn(buttonVariants({ variant: "ghost" }), "justify-start"),
          children: item.title
        },
        item.href
      ))
    }
  );
}

// app/routes/forms.tsx
import { Outlet as Outlet2 } from "@remix-run/react";
import { jsx as jsx42, jsxs as jsxs24 } from "react/jsx-runtime";
var metadata = {
  title: "Forms",
  description: "Advanced form example using react-hook-form and Zod."
}, sidebarNavItems = [
  {
    title: "Profile",
    href: "/forms/profile"
  },
  {
    title: "Account",
    href: "/forms/account"
  },
  {
    title: "Appearance",
    href: "/forms/appearance"
  },
  {
    title: "Notifications",
    href: "/forms/notifications"
  },
  {
    title: "Display",
    href: "/forms/display"
  }
];
function Forms() {
  return /* @__PURE__ */ jsxs24("div", { className: "hidden space-y-6 p-10 pb-16 md:block", children: [
    /* @__PURE__ */ jsxs24("div", { className: "space-y-0.5", children: [
      /* @__PURE__ */ jsx42("h2", { className: "text-2xl font-bold tracking-tight", children: "Settings" }),
      /* @__PURE__ */ jsx42("p", { className: "text-muted-foreground", children: "Manage your account settings and set e-mail preferences." })
    ] }),
    /* @__PURE__ */ jsx42(Separator, { className: "my-6" }),
    /* @__PURE__ */ jsxs24("div", { className: "flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0", children: [
      /* @__PURE__ */ jsx42("aside", { className: "-mx-4 lg:w-1/5", children: /* @__PURE__ */ jsx42(SidebarNav, { items: sidebarNavItems }) }),
      /* @__PURE__ */ jsx42("div", { className: "flex-1 lg:max-w-2xl", children: /* @__PURE__ */ jsx42(Outlet2, {}) })
    ] })
  ] });
}

// app/routes/music.tsx
var music_exports = {};
__export(music_exports, {
  default: () => Music,
  metadata: () => metadata2
});

// app/components/ui/scroll-area.tsx
import * as React20 from "react";
import * as ScrollAreaPrimitive from "@radix-ui/react-scroll-area";
import { jsx as jsx43, jsxs as jsxs25 } from "react/jsx-runtime";
var ScrollArea = React20.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxs25(
  ScrollAreaPrimitive.Root,
  {
    ref,
    className: cn("relative overflow-hidden", className),
    ...props,
    children: [
      /* @__PURE__ */ jsx43(ScrollAreaPrimitive.Viewport, { className: "h-full w-full rounded-[inherit]", children }),
      /* @__PURE__ */ jsx43(ScrollBar, {}),
      /* @__PURE__ */ jsx43(ScrollAreaPrimitive.Corner, {})
    ]
  }
));
ScrollArea.displayName = ScrollAreaPrimitive.Root.displayName;
var ScrollBar = React20.forwardRef(({ className, orientation = "vertical", ...props }, ref) => /* @__PURE__ */ jsx43(
  ScrollAreaPrimitive.ScrollAreaScrollbar,
  {
    ref,
    orientation,
    className: cn(
      "flex touch-none select-none transition-colors",
      orientation === "vertical" && "h-full w-2.5 border-l border-l-transparent p-[1px]",
      orientation === "horizontal" && "h-2.5 flex-col border-t border-t-transparent p-[1px]",
      className
    ),
    ...props,
    children: /* @__PURE__ */ jsx43(ScrollAreaPrimitive.ScrollAreaThumb, { className: "relative flex-1 rounded-full bg-border" })
  }
));
ScrollBar.displayName = ScrollAreaPrimitive.ScrollAreaScrollbar.displayName;

// app/components/music/album-artwork.tsx
import { PlusCircledIcon as PlusCircledIcon2 } from "@radix-ui/react-icons";

// app/components/ui/context-menu.tsx
import * as React21 from "react";
import * as ContextMenuPrimitive from "@radix-ui/react-context-menu";
import { Check as Check4, ChevronRight as ChevronRight3, Circle as Circle3 } from "lucide-react";
import { jsx as jsx44, jsxs as jsxs26 } from "react/jsx-runtime";
var ContextMenu = ContextMenuPrimitive.Root, ContextMenuTrigger = ContextMenuPrimitive.Trigger;
var ContextMenuSub = ContextMenuPrimitive.Sub;
var ContextMenuSubTrigger = React21.forwardRef(({ className, inset, children, ...props }, ref) => /* @__PURE__ */ jsxs26(
  ContextMenuPrimitive.SubTrigger,
  {
    ref,
    className: cn(
      "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground",
      inset && "pl-8",
      className
    ),
    ...props,
    children: [
      children,
      /* @__PURE__ */ jsx44(ChevronRight3, { className: "ml-auto h-4 w-4" })
    ]
  }
));
ContextMenuSubTrigger.displayName = ContextMenuPrimitive.SubTrigger.displayName;
var ContextMenuSubContent = React21.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx44(
  ContextMenuPrimitive.SubContent,
  {
    ref,
    className: cn(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className
    ),
    ...props
  }
));
ContextMenuSubContent.displayName = ContextMenuPrimitive.SubContent.displayName;
var ContextMenuContent = React21.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx44(ContextMenuPrimitive.Portal, { children: /* @__PURE__ */ jsx44(
  ContextMenuPrimitive.Content,
  {
    ref,
    className: cn(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md animate-in fade-in-80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className
    ),
    ...props
  }
) }));
ContextMenuContent.displayName = ContextMenuPrimitive.Content.displayName;
var ContextMenuItem = React21.forwardRef(({ className, inset, ...props }, ref) => /* @__PURE__ */ jsx44(
  ContextMenuPrimitive.Item,
  {
    ref,
    className: cn(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      inset && "pl-8",
      className
    ),
    ...props
  }
));
ContextMenuItem.displayName = ContextMenuPrimitive.Item.displayName;
var ContextMenuCheckboxItem = React21.forwardRef(({ className, children, checked, ...props }, ref) => /* @__PURE__ */ jsxs26(
  ContextMenuPrimitive.CheckboxItem,
  {
    ref,
    className: cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    ),
    checked,
    ...props,
    children: [
      /* @__PURE__ */ jsx44("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ jsx44(ContextMenuPrimitive.ItemIndicator, { children: /* @__PURE__ */ jsx44(Check4, { className: "h-4 w-4" }) }) }),
      children
    ]
  }
));
ContextMenuCheckboxItem.displayName = ContextMenuPrimitive.CheckboxItem.displayName;
var ContextMenuRadioItem = React21.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxs26(
  ContextMenuPrimitive.RadioItem,
  {
    ref,
    className: cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    ),
    ...props,
    children: [
      /* @__PURE__ */ jsx44("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ jsx44(ContextMenuPrimitive.ItemIndicator, { children: /* @__PURE__ */ jsx44(Circle3, { className: "h-2 w-2 fill-current" }) }) }),
      children
    ]
  }
));
ContextMenuRadioItem.displayName = ContextMenuPrimitive.RadioItem.displayName;
var ContextMenuLabel = React21.forwardRef(({ className, inset, ...props }, ref) => /* @__PURE__ */ jsx44(
  ContextMenuPrimitive.Label,
  {
    ref,
    className: cn(
      "px-2 py-1.5 text-sm font-semibold text-foreground",
      inset && "pl-8",
      className
    ),
    ...props
  }
));
ContextMenuLabel.displayName = ContextMenuPrimitive.Label.displayName;
var ContextMenuSeparator = React21.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx44(
  ContextMenuPrimitive.Separator,
  {
    ref,
    className: cn("-mx-1 my-1 h-px bg-border", className),
    ...props
  }
));
ContextMenuSeparator.displayName = ContextMenuPrimitive.Separator.displayName;
var ContextMenuShortcut = ({
  className,
  ...props
}) => /* @__PURE__ */ jsx44(
  "span",
  {
    className: cn(
      "ml-auto text-xs tracking-widest text-muted-foreground",
      className
    ),
    ...props
  }
);
ContextMenuShortcut.displayName = "ContextMenuShortcut";

// app/components/music/data/playlists.ts
var playlists = [
  "Recently Added",
  "Recently Played",
  "Top Songs",
  "Top Albums",
  "Top Artists",
  "Logic Discography",
  "Bedtime Beats",
  "Feeling Happy",
  "I miss Y2K Pop",
  "Runtober",
  "Mellow Days",
  "Eminem Essentials"
];

// app/components/music/album-artwork.tsx
import { jsx as jsx45, jsxs as jsxs27 } from "react/jsx-runtime";
function AlbumArtwork({
  album,
  aspectRatio = "portrait",
  width,
  height,
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxs27("div", { className: cn("space-y-3", className), ...props, children: [
    /* @__PURE__ */ jsxs27(ContextMenu, { children: [
      /* @__PURE__ */ jsx45(ContextMenuTrigger, { children: /* @__PURE__ */ jsx45("div", { className: "overflow-hidden rounded-md", children: /* @__PURE__ */ jsx45(
        "img",
        {
          src: album.cover,
          alt: album.name,
          width,
          height,
          className: cn(
            "h-auto w-auto object-cover transition-all hover:scale-105",
            aspectRatio === "portrait" ? "aspect-[3/4]" : "aspect-square"
          )
        }
      ) }) }),
      /* @__PURE__ */ jsxs27(ContextMenuContent, { className: "w-40", children: [
        /* @__PURE__ */ jsx45(ContextMenuItem, { children: "Add to Library" }),
        /* @__PURE__ */ jsxs27(ContextMenuSub, { children: [
          /* @__PURE__ */ jsx45(ContextMenuSubTrigger, { children: "Add to Playlist" }),
          /* @__PURE__ */ jsxs27(ContextMenuSubContent, { className: "w-48", children: [
            /* @__PURE__ */ jsxs27(ContextMenuItem, { children: [
              /* @__PURE__ */ jsx45(PlusCircledIcon2, { className: "mr-2 h-4 w-4" }),
              "New Playlist"
            ] }),
            /* @__PURE__ */ jsx45(ContextMenuSeparator, {}),
            playlists.map((playlist) => /* @__PURE__ */ jsxs27(ContextMenuItem, { children: [
              /* @__PURE__ */ jsx45(
                "svg",
                {
                  xmlns: "http://www.w3.org/2000/svg",
                  fill: "none",
                  stroke: "currentColor",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeWidth: "2",
                  className: "mr-2 h-4 w-4",
                  viewBox: "0 0 24 24",
                  children: /* @__PURE__ */ jsx45("path", { d: "M21 15V6M18.5 18a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5ZM12 12H3M16 6H3M12 18H3" })
                }
              ),
              playlist
            ] }, playlist))
          ] })
        ] }),
        /* @__PURE__ */ jsx45(ContextMenuSeparator, {}),
        /* @__PURE__ */ jsx45(ContextMenuItem, { children: "Play Next" }),
        /* @__PURE__ */ jsx45(ContextMenuItem, { children: "Play Later" }),
        /* @__PURE__ */ jsx45(ContextMenuItem, { children: "Create Station" }),
        /* @__PURE__ */ jsx45(ContextMenuSeparator, {}),
        /* @__PURE__ */ jsx45(ContextMenuItem, { children: "Like" }),
        /* @__PURE__ */ jsx45(ContextMenuItem, { children: "Share" })
      ] })
    ] }),
    /* @__PURE__ */ jsxs27("div", { className: "space-y-1 text-sm", children: [
      /* @__PURE__ */ jsx45("h3", { className: "font-medium leading-none", children: album.name }),
      /* @__PURE__ */ jsx45("p", { className: "text-xs text-muted-foreground", children: album.artist })
    ] })
  ] });
}

// app/components/ui/menubar.tsx
import * as React22 from "react";
import * as MenubarPrimitive from "@radix-ui/react-menubar";
import { Check as Check5, ChevronRight as ChevronRight4, Circle as Circle4 } from "lucide-react";
import { jsx as jsx46, jsxs as jsxs28 } from "react/jsx-runtime";
var MenubarMenu = MenubarPrimitive.Menu;
var MenubarSub = MenubarPrimitive.Sub, MenubarRadioGroup = MenubarPrimitive.RadioGroup, Menubar = React22.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx46(
  MenubarPrimitive.Root,
  {
    ref,
    className: cn(
      "flex h-10 items-center space-x-1 rounded-md border bg-background p-1",
      className
    ),
    ...props
  }
));
Menubar.displayName = MenubarPrimitive.Root.displayName;
var MenubarTrigger = React22.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx46(
  MenubarPrimitive.Trigger,
  {
    ref,
    className: cn(
      "flex cursor-default select-none items-center rounded-sm px-3 py-1.5 text-sm font-medium outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground",
      className
    ),
    ...props
  }
));
MenubarTrigger.displayName = MenubarPrimitive.Trigger.displayName;
var MenubarSubTrigger = React22.forwardRef(({ className, inset, children, ...props }, ref) => /* @__PURE__ */ jsxs28(
  MenubarPrimitive.SubTrigger,
  {
    ref,
    className: cn(
      "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground",
      inset && "pl-8",
      className
    ),
    ...props,
    children: [
      children,
      /* @__PURE__ */ jsx46(ChevronRight4, { className: "ml-auto h-4 w-4" })
    ]
  }
));
MenubarSubTrigger.displayName = MenubarPrimitive.SubTrigger.displayName;
var MenubarSubContent = React22.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx46(
  MenubarPrimitive.SubContent,
  {
    ref,
    className: cn(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className
    ),
    ...props
  }
));
MenubarSubContent.displayName = MenubarPrimitive.SubContent.displayName;
var MenubarContent = React22.forwardRef(
  ({ className, align = "start", alignOffset = -4, sideOffset = 8, ...props }, ref) => /* @__PURE__ */ jsx46(MenubarPrimitive.Portal, { children: /* @__PURE__ */ jsx46(
    MenubarPrimitive.Content,
    {
      ref,
      align,
      alignOffset,
      sideOffset,
      className: cn(
        "z-50 min-w-[12rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        className
      ),
      ...props
    }
  ) })
);
MenubarContent.displayName = MenubarPrimitive.Content.displayName;
var MenubarItem = React22.forwardRef(({ className, inset, ...props }, ref) => /* @__PURE__ */ jsx46(
  MenubarPrimitive.Item,
  {
    ref,
    className: cn(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      inset && "pl-8",
      className
    ),
    ...props
  }
));
MenubarItem.displayName = MenubarPrimitive.Item.displayName;
var MenubarCheckboxItem = React22.forwardRef(({ className, children, checked, ...props }, ref) => /* @__PURE__ */ jsxs28(
  MenubarPrimitive.CheckboxItem,
  {
    ref,
    className: cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    ),
    checked,
    ...props,
    children: [
      /* @__PURE__ */ jsx46("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ jsx46(MenubarPrimitive.ItemIndicator, { children: /* @__PURE__ */ jsx46(Check5, { className: "h-4 w-4" }) }) }),
      children
    ]
  }
));
MenubarCheckboxItem.displayName = MenubarPrimitive.CheckboxItem.displayName;
var MenubarRadioItem = React22.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxs28(
  MenubarPrimitive.RadioItem,
  {
    ref,
    className: cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    ),
    ...props,
    children: [
      /* @__PURE__ */ jsx46("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ jsx46(MenubarPrimitive.ItemIndicator, { children: /* @__PURE__ */ jsx46(Circle4, { className: "h-2 w-2 fill-current" }) }) }),
      children
    ]
  }
));
MenubarRadioItem.displayName = MenubarPrimitive.RadioItem.displayName;
var MenubarLabel = React22.forwardRef(({ className, inset, ...props }, ref) => /* @__PURE__ */ jsx46(
  MenubarPrimitive.Label,
  {
    ref,
    className: cn(
      "px-2 py-1.5 text-sm font-semibold",
      inset && "pl-8",
      className
    ),
    ...props
  }
));
MenubarLabel.displayName = MenubarPrimitive.Label.displayName;
var MenubarSeparator = React22.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx46(
  MenubarPrimitive.Separator,
  {
    ref,
    className: cn("-mx-1 my-1 h-px bg-muted", className),
    ...props
  }
));
MenubarSeparator.displayName = MenubarPrimitive.Separator.displayName;
var MenubarShortcut = ({
  className,
  ...props
}) => /* @__PURE__ */ jsx46(
  "span",
  {
    className: cn(
      "ml-auto text-xs tracking-widest text-muted-foreground",
      className
    ),
    ...props
  }
);
MenubarShortcut.displayname = "MenubarShortcut";

// app/components/music/menu.tsx
import { jsx as jsx47, jsxs as jsxs29 } from "react/jsx-runtime";
function Menu2() {
  return /* @__PURE__ */ jsxs29(Menubar, { className: "rounded-none border-b border-none px-2 lg:px-4", children: [
    /* @__PURE__ */ jsxs29(MenubarMenu, { children: [
      /* @__PURE__ */ jsx47(MenubarTrigger, { className: "font-bold", children: "Music" }),
      /* @__PURE__ */ jsxs29(MenubarContent, { children: [
        /* @__PURE__ */ jsx47(MenubarItem, { children: "About Music" }),
        /* @__PURE__ */ jsx47(MenubarSeparator, {}),
        /* @__PURE__ */ jsxs29(MenubarItem, { children: [
          "Preferences... ",
          /* @__PURE__ */ jsx47(MenubarShortcut, { children: "\u2318," })
        ] }),
        /* @__PURE__ */ jsx47(MenubarSeparator, {}),
        /* @__PURE__ */ jsxs29(MenubarItem, { children: [
          "Hide Music... ",
          /* @__PURE__ */ jsx47(MenubarShortcut, { children: "\u2318H" })
        ] }),
        /* @__PURE__ */ jsxs29(MenubarItem, { children: [
          "Hide Others... ",
          /* @__PURE__ */ jsx47(MenubarShortcut, { children: "\u21E7\u2318H" })
        ] }),
        /* @__PURE__ */ jsx47(MenubarShortcut, {}),
        /* @__PURE__ */ jsxs29(MenubarItem, { children: [
          "Quit Music ",
          /* @__PURE__ */ jsx47(MenubarShortcut, { children: "\u2318Q" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs29(MenubarMenu, { children: [
      /* @__PURE__ */ jsx47(MenubarTrigger, { className: "relative", children: "File" }),
      /* @__PURE__ */ jsxs29(MenubarContent, { children: [
        /* @__PURE__ */ jsxs29(MenubarSub, { children: [
          /* @__PURE__ */ jsx47(MenubarSubTrigger, { children: "New" }),
          /* @__PURE__ */ jsxs29(MenubarSubContent, { className: "w-[230px]", children: [
            /* @__PURE__ */ jsxs29(MenubarItem, { children: [
              "Playlist ",
              /* @__PURE__ */ jsx47(MenubarShortcut, { children: "\u2318N" })
            ] }),
            /* @__PURE__ */ jsxs29(MenubarItem, { disabled: !0, children: [
              "Playlist from Selection ",
              /* @__PURE__ */ jsx47(MenubarShortcut, { children: "\u21E7\u2318N" })
            ] }),
            /* @__PURE__ */ jsxs29(MenubarItem, { children: [
              "Smart Playlist... ",
              /* @__PURE__ */ jsx47(MenubarShortcut, { children: "\u2325\u2318N" })
            ] }),
            /* @__PURE__ */ jsx47(MenubarItem, { children: "Playlist Folder" }),
            /* @__PURE__ */ jsx47(MenubarItem, { disabled: !0, children: "Genius Playlist" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs29(MenubarItem, { children: [
          "Open Stream URL... ",
          /* @__PURE__ */ jsx47(MenubarShortcut, { children: "\u2318U" })
        ] }),
        /* @__PURE__ */ jsxs29(MenubarItem, { children: [
          "Close Window ",
          /* @__PURE__ */ jsx47(MenubarShortcut, { children: "\u2318W" })
        ] }),
        /* @__PURE__ */ jsx47(MenubarSeparator, {}),
        /* @__PURE__ */ jsxs29(MenubarSub, { children: [
          /* @__PURE__ */ jsx47(MenubarSubTrigger, { children: "Library" }),
          /* @__PURE__ */ jsxs29(MenubarSubContent, { children: [
            /* @__PURE__ */ jsx47(MenubarItem, { children: "Update Cloud Library" }),
            /* @__PURE__ */ jsx47(MenubarItem, { children: "Update Genius" }),
            /* @__PURE__ */ jsx47(MenubarSeparator, {}),
            /* @__PURE__ */ jsx47(MenubarItem, { children: "Organize Library..." }),
            /* @__PURE__ */ jsx47(MenubarItem, { children: "Export Library..." }),
            /* @__PURE__ */ jsx47(MenubarSeparator, {}),
            /* @__PURE__ */ jsx47(MenubarItem, { children: "Import Playlist..." }),
            /* @__PURE__ */ jsx47(MenubarItem, { disabled: !0, children: "Export Playlist..." }),
            /* @__PURE__ */ jsx47(MenubarItem, { children: "Show Duplicate Items" }),
            /* @__PURE__ */ jsx47(MenubarSeparator, {}),
            /* @__PURE__ */ jsx47(MenubarItem, { children: "Get Album Artwork" }),
            /* @__PURE__ */ jsx47(MenubarItem, { disabled: !0, children: "Get Track Names" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs29(MenubarItem, { children: [
          "Import... ",
          /* @__PURE__ */ jsx47(MenubarShortcut, { children: "\u2318O" })
        ] }),
        /* @__PURE__ */ jsx47(MenubarItem, { disabled: !0, children: "Burn Playlist to Disc..." }),
        /* @__PURE__ */ jsx47(MenubarSeparator, {}),
        /* @__PURE__ */ jsxs29(MenubarItem, { children: [
          "Show in Finder ",
          /* @__PURE__ */ jsx47(MenubarShortcut, { children: "\u21E7\u2318R" }),
          " "
        ] }),
        /* @__PURE__ */ jsx47(MenubarItem, { children: "Convert" }),
        /* @__PURE__ */ jsx47(MenubarSeparator, {}),
        /* @__PURE__ */ jsx47(MenubarItem, { children: "Page Setup..." }),
        /* @__PURE__ */ jsxs29(MenubarItem, { disabled: !0, children: [
          "Print... ",
          /* @__PURE__ */ jsx47(MenubarShortcut, { children: "\u2318P" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs29(MenubarMenu, { children: [
      /* @__PURE__ */ jsx47(MenubarTrigger, { children: "Edit" }),
      /* @__PURE__ */ jsxs29(MenubarContent, { children: [
        /* @__PURE__ */ jsxs29(MenubarItem, { disabled: !0, children: [
          "Undo ",
          /* @__PURE__ */ jsx47(MenubarShortcut, { children: "\u2318Z" })
        ] }),
        /* @__PURE__ */ jsxs29(MenubarItem, { disabled: !0, children: [
          "Redo ",
          /* @__PURE__ */ jsx47(MenubarShortcut, { children: "\u21E7\u2318Z" })
        ] }),
        /* @__PURE__ */ jsx47(MenubarSeparator, {}),
        /* @__PURE__ */ jsxs29(MenubarItem, { disabled: !0, children: [
          "Cut ",
          /* @__PURE__ */ jsx47(MenubarShortcut, { children: "\u2318X" })
        ] }),
        /* @__PURE__ */ jsxs29(MenubarItem, { disabled: !0, children: [
          "Copy ",
          /* @__PURE__ */ jsx47(MenubarShortcut, { children: "\u2318C" })
        ] }),
        /* @__PURE__ */ jsxs29(MenubarItem, { disabled: !0, children: [
          "Paste ",
          /* @__PURE__ */ jsx47(MenubarShortcut, { children: "\u2318V" })
        ] }),
        /* @__PURE__ */ jsx47(MenubarSeparator, {}),
        /* @__PURE__ */ jsxs29(MenubarItem, { children: [
          "Select All ",
          /* @__PURE__ */ jsx47(MenubarShortcut, { children: "\u2318A" })
        ] }),
        /* @__PURE__ */ jsxs29(MenubarItem, { disabled: !0, children: [
          "Deselect All ",
          /* @__PURE__ */ jsx47(MenubarShortcut, { children: "\u21E7\u2318A" })
        ] }),
        /* @__PURE__ */ jsx47(MenubarSeparator, {}),
        /* @__PURE__ */ jsxs29(MenubarItem, { children: [
          "Smart Dictation...",
          " ",
          /* @__PURE__ */ jsx47(MenubarShortcut, { children: /* @__PURE__ */ jsxs29(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
              fill: "none",
              stroke: "currentColor",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeWidth: "2",
              className: "h-4 w-4",
              viewBox: "0 0 24 24",
              children: [
                /* @__PURE__ */ jsx47("path", { d: "m12 8-9.04 9.06a2.82 2.82 0 1 0 3.98 3.98L16 12" }),
                /* @__PURE__ */ jsx47("circle", { cx: "17", cy: "7", r: "5" })
              ]
            }
          ) })
        ] }),
        /* @__PURE__ */ jsxs29(MenubarItem, { children: [
          "Emoji & Symbols",
          " ",
          /* @__PURE__ */ jsx47(MenubarShortcut, { children: /* @__PURE__ */ jsxs29(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
              fill: "none",
              stroke: "currentColor",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeWidth: "2",
              className: "h-4 w-4",
              viewBox: "0 0 24 24",
              children: [
                /* @__PURE__ */ jsx47("circle", { cx: "12", cy: "12", r: "10" }),
                /* @__PURE__ */ jsx47("path", { d: "M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" })
              ]
            }
          ) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs29(MenubarMenu, { children: [
      /* @__PURE__ */ jsx47(MenubarTrigger, { children: "View" }),
      /* @__PURE__ */ jsxs29(MenubarContent, { children: [
        /* @__PURE__ */ jsx47(MenubarCheckboxItem, { children: "Show Playing Next" }),
        /* @__PURE__ */ jsx47(MenubarCheckboxItem, { checked: !0, children: "Show Lyrics" }),
        /* @__PURE__ */ jsx47(MenubarSeparator, {}),
        /* @__PURE__ */ jsx47(MenubarItem, { inset: !0, disabled: !0, children: "Show Status Bar" }),
        /* @__PURE__ */ jsx47(MenubarSeparator, {}),
        /* @__PURE__ */ jsx47(MenubarItem, { inset: !0, children: "Hide Sidebar" }),
        /* @__PURE__ */ jsx47(MenubarItem, { disabled: !0, inset: !0, children: "Enter Full Screen" })
      ] })
    ] }),
    /* @__PURE__ */ jsxs29(MenubarMenu, { children: [
      /* @__PURE__ */ jsx47(MenubarTrigger, { className: "hidden md:block", children: "Account" }),
      /* @__PURE__ */ jsxs29(MenubarContent, { forceMount: !0, children: [
        /* @__PURE__ */ jsx47(MenubarLabel, { inset: !0, children: "Switch Account" }),
        /* @__PURE__ */ jsx47(MenubarSeparator, {}),
        /* @__PURE__ */ jsxs29(MenubarRadioGroup, { value: "benoit", children: [
          /* @__PURE__ */ jsx47(MenubarRadioItem, { value: "andy", children: "Andy" }),
          /* @__PURE__ */ jsx47(MenubarRadioItem, { value: "benoit", children: "Benoit" }),
          /* @__PURE__ */ jsx47(MenubarRadioItem, { value: "Luis", children: "Luis" })
        ] }),
        /* @__PURE__ */ jsx47(MenubarSeparator, {}),
        /* @__PURE__ */ jsx47(MenubarItem, { inset: !0, children: "Manage Family..." }),
        /* @__PURE__ */ jsx47(MenubarSeparator, {}),
        /* @__PURE__ */ jsx47(MenubarItem, { inset: !0, children: "Add Account..." })
      ] })
    ] })
  ] });
}

// app/components/music/podcast-empty-placeholder.tsx
import { jsx as jsx48, jsxs as jsxs30 } from "react/jsx-runtime";
function PodcastEmptyPlaceholder() {
  return /* @__PURE__ */ jsx48("div", { className: "flex h-[450px] shrink-0 items-center justify-center rounded-md border border-dashed", children: /* @__PURE__ */ jsxs30("div", { className: "mx-auto flex max-w-[420px] flex-col items-center justify-center text-center", children: [
    /* @__PURE__ */ jsxs30(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "2",
        className: "h-10 w-10 text-muted-foreground",
        viewBox: "0 0 24 24",
        children: [
          /* @__PURE__ */ jsx48("circle", { cx: "12", cy: "11", r: "1" }),
          /* @__PURE__ */ jsx48("path", { d: "M11 17a1 1 0 0 1 2 0c0 .5-.34 3-.5 4.5a.5.5 0 0 1-1 0c-.16-1.5-.5-4-.5-4.5ZM8 14a5 5 0 1 1 8 0" }),
          /* @__PURE__ */ jsx48("path", { d: "M17 18.5a9 9 0 1 0-10 0" })
        ]
      }
    ),
    /* @__PURE__ */ jsx48("h3", { className: "mt-4 text-lg font-semibold", children: "No episodes added" }),
    /* @__PURE__ */ jsx48("p", { className: "mb-4 mt-2 text-sm text-muted-foreground", children: "You have not added any podcasts. Add one below." }),
    /* @__PURE__ */ jsxs30(Dialog, { children: [
      /* @__PURE__ */ jsx48(DialogTrigger, { asChild: !0, children: /* @__PURE__ */ jsx48(Button, { size: "sm", className: "relative", children: "Add Podcast" }) }),
      /* @__PURE__ */ jsxs30(DialogContent, { children: [
        /* @__PURE__ */ jsxs30(DialogHeader, { children: [
          /* @__PURE__ */ jsx48(DialogTitle, { children: "Add Podcast" }),
          /* @__PURE__ */ jsx48(DialogDescription, { children: "Copy and paste the podcast feed URL to import." })
        ] }),
        /* @__PURE__ */ jsx48("div", { className: "grid gap-4 py-4", children: /* @__PURE__ */ jsxs30("div", { className: "grid gap-2", children: [
          /* @__PURE__ */ jsx48(Label, { htmlFor: "url", children: "Podcast URL" }),
          /* @__PURE__ */ jsx48(Input, { id: "url", placeholder: "https://example.com/feed.xml" })
        ] }) }),
        /* @__PURE__ */ jsx48(DialogFooter, { children: /* @__PURE__ */ jsx48(Button, { children: "Import Podcast" }) })
      ] })
    ] })
  ] }) });
}

// app/components/music/sidebar.tsx
import { jsx as jsx49, jsxs as jsxs31 } from "react/jsx-runtime";
function Sidebar({
  className,
  playlists: playlists2,
  discoverItems: discoverItems2,
  libraryItems: libraryItems2
}) {
  return /* @__PURE__ */ jsx49("div", { className: cn("pb-12", className), children: /* @__PURE__ */ jsxs31("div", { className: "space-y-4 py-4", children: [
    /* @__PURE__ */ jsxs31("div", { className: "px-3 py-2", children: [
      /* @__PURE__ */ jsx49("h2", { className: "mb-2 px-4 text-lg font-semibold tracking-tight", children: "Discover" }),
      /* @__PURE__ */ jsx49("div", { className: "space-y-1", children: discoverItems2.map((discover, index) => /* @__PURE__ */ jsxs31(
        Button,
        {
          variant: index === 0 ? "secondary" : "ghost",
          className: "w-full justify-start",
          children: [
            /* @__PURE__ */ jsx49(
              "img",
              {
                src: discover.icon,
                width: 16,
                alt: "",
                className: "mr-2 h-4 w-4"
              }
            ),
            discover.title
          ]
        },
        `${discover}-${index}`
      )) })
    ] }),
    /* @__PURE__ */ jsxs31("div", { className: "px-3 py-2", children: [
      /* @__PURE__ */ jsx49("h2", { className: "mb-2 px-4 text-lg font-semibold tracking-tight", children: "Library" }),
      /* @__PURE__ */ jsx49("div", { className: "space-y-1", children: libraryItems2.map((library, index) => /* @__PURE__ */ jsxs31(
        Button,
        {
          variant: "ghost",
          className: "w-full justify-start",
          children: [
            /* @__PURE__ */ jsx49(
              "img",
              {
                src: library.icon,
                width: 16,
                alt: "",
                className: "mr-2 h-4 w-4"
              }
            ),
            library.title
          ]
        },
        `${library}-${index}`
      )) })
    ] }),
    /* @__PURE__ */ jsxs31("div", { className: "py-2", children: [
      /* @__PURE__ */ jsx49("h2", { className: "relative px-7 text-lg font-semibold tracking-tight", children: "Playlists" }),
      /* @__PURE__ */ jsx49(ScrollArea, { className: "h-[300px] px-1", children: /* @__PURE__ */ jsx49("div", { className: "space-y-1 p-2", children: playlists2?.map((playlist, index) => /* @__PURE__ */ jsxs31(
        Button,
        {
          variant: "ghost",
          className: "w-full justify-start font-normal",
          children: [
            /* @__PURE__ */ jsxs31(
              "svg",
              {
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                strokeWidth: "2",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                className: "mr-2 h-4 w-4",
                children: [
                  /* @__PURE__ */ jsx49("path", { d: "M21 15V6" }),
                  /* @__PURE__ */ jsx49("path", { d: "M18.5 18a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" }),
                  /* @__PURE__ */ jsx49("path", { d: "M12 12H3" }),
                  /* @__PURE__ */ jsx49("path", { d: "M16 6H3" }),
                  /* @__PURE__ */ jsx49("path", { d: "M12 18H3" })
                ]
              }
            ),
            playlist
          ]
        },
        `${playlist}-${index}`
      )) }) })
    ] })
  ] }) });
}

// app/components/music/data/albums.ts
var listenNowAlbums = [
  {
    name: "React Rendezvous",
    artist: "Ethan Byte",
    cover: "https://images.unsplash.com/photo-1611348586804-61bf6c080437?w=300&dpr=2&q=80"
  },
  {
    name: "Async Awakenings",
    artist: "Nina Netcode",
    cover: "https://images.unsplash.com/photo-1468817814611-b7edf94b5d60?w=300&dpr=2&q=80"
  },
  {
    name: "The Art of Reusability",
    artist: "Lena Logic",
    cover: "https://images.unsplash.com/photo-1528143358888-6d3c7f67bd5d?w=300&dpr=2&q=80"
  },
  {
    name: "Stateful Symphony",
    artist: "Beth Binary",
    cover: "https://images.unsplash.com/photo-1490300472339-79e4adc6be4a?w=300&dpr=2&q=80"
  }
], madeForYouAlbums = [
  {
    name: "Thinking Components",
    artist: "Lena Logic",
    cover: "https://images.unsplash.com/photo-1615247001958-f4bc92fa6a4a?w=300&dpr=2&q=80"
  },
  {
    name: "Functional Fury",
    artist: "Beth Binary",
    cover: "https://images.unsplash.com/photo-1513745405825-efaf9a49315f?w=300&dpr=2&q=80"
  },
  {
    name: "React Rendezvous",
    artist: "Ethan Byte",
    cover: "https://images.unsplash.com/photo-1614113489855-66422ad300a4?w=300&dpr=2&q=80"
  },
  {
    name: "Stateful Symphony",
    artist: "Beth Binary",
    cover: "https://images.unsplash.com/photo-1446185250204-f94591f7d702?w=300&dpr=2&q=80"
  },
  {
    name: "Async Awakenings",
    artist: "Nina Netcode",
    cover: "https://images.unsplash.com/photo-1468817814611-b7edf94b5d60?w=300&dpr=2&q=80"
  },
  {
    name: "The Art of Reusability",
    artist: "Lena Logic",
    cover: "https://images.unsplash.com/photo-1490300472339-79e4adc6be4a?w=300&dpr=2&q=80"
  }
];

// app/routes/music.tsx
import { PlusCircledIcon as PlusCircledIcon3 } from "@radix-ui/react-icons";

// assets/images/music/discover_1.svg
var discover_1_default = "/build/_assets/discover_1-M5LBYGF6.svg";

// assets/images/music/discover_2.svg
var discover_2_default = "/build/_assets/discover_2-FGHKIEPJ.svg";

// assets/images/music/discover_3.svg
var discover_3_default = "/build/_assets/discover_3-N2VKD6QN.svg";

// assets/images/music/library_1.svg
var library_1_default = "/build/_assets/library_1-SQ3UZDZP.svg";

// assets/images/music/library_2.svg
var library_2_default = "/build/_assets/library_2-22JZB7KN.svg";

// assets/images/music/library_3.svg
var library_3_default = "/build/_assets/library_3-TXME7N3Y.svg";

// assets/images/music/library_4.svg
var library_4_default = "/build/_assets/library_4-6SINYWAE.svg";

// assets/images/music/library_5.svg
var library_5_default = "/build/_assets/library_5-5ETGMPEC.svg";

// app/routes/music.tsx
import { jsx as jsx50, jsxs as jsxs32 } from "react/jsx-runtime";
var metadata2 = {
  title: "Music App",
  description: "Example music app using the components."
}, discoverItems = [
  { title: "Listen Now", icon: discover_1_default },
  { title: "Browse", icon: discover_2_default },
  { title: "Radio", icon: discover_3_default }
], libraryItems = [
  { title: "Playlists", icon: library_1_default },
  { title: "Songs", icon: library_2_default },
  { title: "Made for you", icon: library_3_default },
  { title: "Artists", icon: library_4_default },
  { title: "Albums", icon: library_5_default }
], listenNowTabItems = [
  {
    title: "Music",
    value: "music",
    disabled: !1
  },
  {
    title: "Podcasts",
    value: "podcasts",
    disabled: !1
  },
  {
    title: "Live",
    value: "live",
    disabled: !0
  }
];
function Music() {
  return /* @__PURE__ */ jsxs32("div", { className: "hidden md:block", children: [
    /* @__PURE__ */ jsx50(Menu2, {}),
    /* @__PURE__ */ jsx50("div", { className: "border-t", children: /* @__PURE__ */ jsx50("div", { className: "bg-background", children: /* @__PURE__ */ jsxs32("div", { className: "grid lg:grid-cols-5", children: [
      /* @__PURE__ */ jsx50(
        Sidebar,
        {
          playlists,
          discoverItems,
          libraryItems,
          className: "hidden lg:block"
        }
      ),
      /* @__PURE__ */ jsx50("div", { className: "col-span-3 lg:col-span-4 lg:border-l", children: /* @__PURE__ */ jsx50("div", { className: "h-full px-4 py-6 lg:px-8", children: /* @__PURE__ */ jsxs32(
        ShareNavbar,
        {
          items: listenNowTabItems,
          defaultValue: "music",
          tabAction: /* @__PURE__ */ jsx50("div", { className: "ml-auto mr-4", children: /* @__PURE__ */ jsxs32(Button, { children: [
            /* @__PURE__ */ jsx50(PlusCircledIcon3, { className: "mr-2 h-4 w-4" }),
            "Add music"
          ] }) }),
          tabClassName: "space-between flex items-center",
          children: [
            /* @__PURE__ */ jsxs32(
              TabsContent,
              {
                value: "music",
                className: "border-none p-0 outline-none",
                children: [
                  /* @__PURE__ */ jsx50("div", { className: "flex items-center justify-between", children: /* @__PURE__ */ jsxs32("div", { className: "space-y-1", children: [
                    /* @__PURE__ */ jsx50("h2", { className: "text-2xl font-semibold tracking-tight", children: "Listen Now" }),
                    /* @__PURE__ */ jsx50("p", { className: "text-sm text-muted-foreground", children: "Top picks for you. Updated daily." })
                  ] }) }),
                  /* @__PURE__ */ jsx50(Separator, { className: "my-4" }),
                  /* @__PURE__ */ jsx50("div", { className: "relative", children: /* @__PURE__ */ jsxs32(ScrollArea, { children: [
                    /* @__PURE__ */ jsx50("div", { className: "flex space-x-4 pb-4", children: listenNowAlbums.map((album) => /* @__PURE__ */ jsx50(
                      AlbumArtwork,
                      {
                        album,
                        className: "w-[250px]",
                        aspectRatio: "portrait",
                        width: 250,
                        height: 330
                      },
                      album.name
                    )) }),
                    /* @__PURE__ */ jsx50(ScrollBar, { orientation: "horizontal" })
                  ] }) }),
                  /* @__PURE__ */ jsxs32("div", { className: "mt-6 space-y-1", children: [
                    /* @__PURE__ */ jsx50("h2", { className: "text-2xl font-semibold tracking-tight", children: "Made for You" }),
                    /* @__PURE__ */ jsx50("p", { className: "text-sm text-muted-foreground", children: "Your personal playlists. Updated daily." })
                  ] }),
                  /* @__PURE__ */ jsx50(Separator, { className: "my-4" }),
                  /* @__PURE__ */ jsx50("div", { className: "relative", children: /* @__PURE__ */ jsxs32(ScrollArea, { children: [
                    /* @__PURE__ */ jsx50("div", { className: "flex space-x-4 pb-4", children: madeForYouAlbums.map((album) => /* @__PURE__ */ jsx50(
                      AlbumArtwork,
                      {
                        album,
                        className: "w-[150px]",
                        aspectRatio: "square",
                        width: 150,
                        height: 150
                      },
                      album.name
                    )) }),
                    /* @__PURE__ */ jsx50(ScrollBar, { orientation: "horizontal" })
                  ] }) })
                ]
              }
            ),
            /* @__PURE__ */ jsxs32(
              TabsContent,
              {
                value: "podcasts",
                className: "h-full flex-col border-none p-0 data-[state=active]:flex",
                children: [
                  /* @__PURE__ */ jsx50("div", { className: "flex items-center justify-between", children: /* @__PURE__ */ jsxs32("div", { className: "space-y-1", children: [
                    /* @__PURE__ */ jsx50("h2", { className: "text-2xl font-semibold tracking-tight", children: "New Episodes" }),
                    /* @__PURE__ */ jsx50("p", { className: "text-sm text-muted-foreground", children: "Your favorite podcasts. Updated daily." })
                  ] }) }),
                  /* @__PURE__ */ jsx50(Separator, { className: "my-4" }),
                  /* @__PURE__ */ jsx50(PodcastEmptyPlaceholder, {})
                ]
              }
            )
          ]
        }
      ) }) })
    ] }) }) })
  ] });
}

// app/routes/tasks.tsx
var tasks_exports = {};
__export(tasks_exports, {
  default: () => Tasks
});

// app/components/ui/badge.tsx
import { cva as cva3 } from "class-variance-authority";
import { jsx as jsx51 } from "react/jsx-runtime";
var badgeVariants = cva3(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
        secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive: "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        outline: "text-foreground"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
function Badge({ className, variant, ...props }) {
  return /* @__PURE__ */ jsx51("div", { className: cn(badgeVariants({ variant }), className), ...props });
}

// app/components/tasks/data/data.tsx
import {
  ArrowDownIcon,
  ArrowRightIcon,
  ArrowUpIcon,
  CheckCircledIcon,
  CircleIcon,
  CrossCircledIcon,
  QuestionMarkCircledIcon,
  StopwatchIcon
} from "@radix-ui/react-icons";
var labels = [
  {
    value: "bug",
    label: "Bug"
  },
  {
    value: "feature",
    label: "Feature"
  },
  {
    value: "documentation",
    label: "Documentation"
  }
], statuses = [
  {
    value: "backlog",
    label: "Backlog",
    icon: QuestionMarkCircledIcon
  },
  {
    value: "todo",
    label: "Todo",
    icon: CircleIcon
  },
  {
    value: "in progress",
    label: "In Progress",
    icon: StopwatchIcon
  },
  {
    value: "done",
    label: "Done",
    icon: CheckCircledIcon
  },
  {
    value: "canceled",
    label: "Canceled",
    icon: CrossCircledIcon
  }
], priorities = [
  {
    label: "Low",
    value: "low",
    icon: ArrowDownIcon
  },
  {
    label: "Medium",
    value: "medium",
    icon: ArrowRightIcon
  },
  {
    label: "High",
    value: "high",
    icon: ArrowUpIcon
  }
];

// app/components/tasks/data-table-column-header.tsx
import {
  ArrowDownIcon as ArrowDownIcon2,
  ArrowUpIcon as ArrowUpIcon2,
  CaretSortIcon as CaretSortIcon3,
  EyeNoneIcon
} from "@radix-ui/react-icons";
import { jsx as jsx52, jsxs as jsxs33 } from "react/jsx-runtime";
function DataTableColumnHeader({
  column,
  title,
  className
}) {
  return column.getCanSort() ? /* @__PURE__ */ jsx52("div", { className: cn("flex items-center space-x-2", className), children: /* @__PURE__ */ jsxs33(DropdownMenu, { children: [
    /* @__PURE__ */ jsx52(DropdownMenuTrigger, { asChild: !0, children: /* @__PURE__ */ jsxs33(
      Button,
      {
        variant: "ghost",
        size: "sm",
        className: "-ml-3 h-8 data-[state=open]:bg-accent",
        children: [
          /* @__PURE__ */ jsx52("span", { children: title }),
          column.getIsSorted() === "desc" ? /* @__PURE__ */ jsx52(ArrowDownIcon2, { className: "ml-2 h-4 w-4" }) : column.getIsSorted() === "asc" ? /* @__PURE__ */ jsx52(ArrowUpIcon2, { className: "ml-2 h-4 w-4" }) : /* @__PURE__ */ jsx52(CaretSortIcon3, { className: "ml-2 h-4 w-4" })
        ]
      }
    ) }),
    /* @__PURE__ */ jsxs33(DropdownMenuContent, { align: "start", children: [
      /* @__PURE__ */ jsxs33(DropdownMenuItem, { onClick: () => column.toggleSorting(!1), children: [
        /* @__PURE__ */ jsx52(ArrowUpIcon2, { className: "mr-2 h-3.5 w-3.5 text-muted-foreground/70" }),
        "Asc"
      ] }),
      /* @__PURE__ */ jsxs33(DropdownMenuItem, { onClick: () => column.toggleSorting(!0), children: [
        /* @__PURE__ */ jsx52(ArrowDownIcon2, { className: "mr-2 h-3.5 w-3.5 text-muted-foreground/70" }),
        "Desc"
      ] }),
      /* @__PURE__ */ jsx52(DropdownMenuSeparator, {}),
      /* @__PURE__ */ jsxs33(DropdownMenuItem, { onClick: () => column.toggleVisibility(!1), children: [
        /* @__PURE__ */ jsx52(EyeNoneIcon, { className: "mr-2 h-3.5 w-3.5 text-muted-foreground/70" }),
        "Hide"
      ] })
    ] })
  ] }) }) : /* @__PURE__ */ jsx52("div", { className: cn(className), children: title });
}

// app/components/tasks/data-table-row-actions.tsx
import { DotsHorizontalIcon } from "@radix-ui/react-icons";

// app/components/tasks/data/schema.ts
import { z as z5 } from "zod";
var taskSchema = z5.object({
  id: z5.string(),
  title: z5.string(),
  status: z5.string(),
  label: z5.string(),
  priority: z5.string()
});

// app/components/tasks/data-table-row-actions.tsx
import { jsx as jsx53, jsxs as jsxs34 } from "react/jsx-runtime";
function DataTableRowActions({
  row
}) {
  let task = taskSchema.parse(row.original);
  return /* @__PURE__ */ jsxs34(DropdownMenu, { children: [
    /* @__PURE__ */ jsx53(DropdownMenuTrigger, { asChild: !0, children: /* @__PURE__ */ jsxs34(
      Button,
      {
        variant: "ghost",
        className: "flex h-8 w-8 p-0 data-[state=open]:bg-muted",
        children: [
          /* @__PURE__ */ jsx53(DotsHorizontalIcon, { className: "h-4 w-4" }),
          /* @__PURE__ */ jsx53("span", { className: "sr-only", children: "Open menu" })
        ]
      }
    ) }),
    /* @__PURE__ */ jsxs34(DropdownMenuContent, { align: "end", className: "w-[160px]", children: [
      /* @__PURE__ */ jsx53(DropdownMenuItem, { children: "Edit" }),
      /* @__PURE__ */ jsx53(DropdownMenuItem, { children: "Make a copy" }),
      /* @__PURE__ */ jsx53(DropdownMenuItem, { children: "Favorite" }),
      /* @__PURE__ */ jsx53(DropdownMenuSeparator, {}),
      /* @__PURE__ */ jsxs34(DropdownMenuSub, { children: [
        /* @__PURE__ */ jsx53(DropdownMenuSubTrigger, { children: "Labels" }),
        /* @__PURE__ */ jsx53(DropdownMenuSubContent, { children: /* @__PURE__ */ jsx53(DropdownMenuRadioGroup, { value: task.label, children: labels.map((label) => /* @__PURE__ */ jsx53(DropdownMenuRadioItem, { value: label.value, children: label.label }, label.value)) }) })
      ] }),
      /* @__PURE__ */ jsx53(DropdownMenuSeparator, {}),
      /* @__PURE__ */ jsxs34(DropdownMenuItem, { children: [
        "Delete",
        /* @__PURE__ */ jsx53(DropdownMenuShortcut, { children: "\u2318\u232B" })
      ] })
    ] })
  ] });
}

// app/components/tasks/columns.tsx
import { jsx as jsx54, jsxs as jsxs35 } from "react/jsx-runtime";
var columns = [
  {
    id: "select",
    header: ({ table }) => /* @__PURE__ */ jsx54(
      Checkbox,
      {
        checked: table.getIsAllPageRowsSelected() || table.getIsSomePageRowsSelected() && "indeterminate",
        onCheckedChange: (value) => table.toggleAllPageRowsSelected(!!value),
        "aria-label": "Select all",
        className: "translate-y-[2px]"
      }
    ),
    cell: ({ row }) => /* @__PURE__ */ jsx54(
      Checkbox,
      {
        checked: row.getIsSelected(),
        onCheckedChange: (value) => row.toggleSelected(!!value),
        "aria-label": "Select row",
        className: "translate-y-[2px]"
      }
    ),
    enableSorting: !1,
    enableHiding: !1
  },
  {
    accessorKey: "id",
    header: ({ column }) => /* @__PURE__ */ jsx54(DataTableColumnHeader, { column, title: "Task" }),
    cell: ({ row }) => /* @__PURE__ */ jsx54("div", { className: "w-[80px]", children: row.getValue("id") }),
    enableSorting: !1,
    enableHiding: !1
  },
  {
    accessorKey: "title",
    header: ({ column }) => /* @__PURE__ */ jsx54(DataTableColumnHeader, { column, title: "Title" }),
    cell: ({ row }) => {
      let label = labels.find((label2) => label2.value === row.original.label);
      return /* @__PURE__ */ jsxs35("div", { className: "flex space-x-2", children: [
        label && /* @__PURE__ */ jsx54(Badge, { variant: "outline", children: label.label }),
        /* @__PURE__ */ jsx54("span", { className: "max-w-[500px] truncate font-medium", children: row.getValue("title") })
      ] });
    }
  },
  {
    accessorKey: "status",
    header: ({ column }) => /* @__PURE__ */ jsx54(DataTableColumnHeader, { column, title: "Status" }),
    cell: ({ row }) => {
      let status = statuses.find(
        (status2) => status2.value === row.getValue("status")
      );
      return status ? /* @__PURE__ */ jsxs35("div", { className: "flex w-[100px] items-center", children: [
        status.icon && /* @__PURE__ */ jsx54(status.icon, { className: "mr-2 h-4 w-4 text-muted-foreground" }),
        /* @__PURE__ */ jsx54("span", { children: status.label })
      ] }) : null;
    },
    filterFn: (row, id, value) => value.includes(row.getValue(id))
  },
  {
    accessorKey: "priority",
    header: ({ column }) => /* @__PURE__ */ jsx54(DataTableColumnHeader, { column, title: "Priority" }),
    cell: ({ row }) => {
      let priority = priorities.find(
        (priority2) => priority2.value === row.getValue("priority")
      );
      return priority ? /* @__PURE__ */ jsxs35("div", { className: "flex items-center", children: [
        priority.icon && /* @__PURE__ */ jsx54(priority.icon, { className: "mr-2 h-4 w-4 text-muted-foreground" }),
        /* @__PURE__ */ jsx54("span", { children: priority.label })
      ] }) : null;
    },
    filterFn: (row, id, value) => value.includes(row.getValue(id))
  },
  {
    id: "actions",
    cell: ({ row }) => /* @__PURE__ */ jsx54(DataTableRowActions, { row })
  }
];

// app/components/tasks/data-table.tsx
import * as React24 from "react";
import {
  flexRender,
  getCoreRowModel,
  getFacetedRowModel,
  getFacetedUniqueValues,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable
} from "@tanstack/react-table";

// app/components/ui/table.tsx
import * as React23 from "react";
import { jsx as jsx55 } from "react/jsx-runtime";
var Table = React23.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx55("div", { className: "relative w-full overflow-auto", children: /* @__PURE__ */ jsx55(
  "table",
  {
    ref,
    className: cn("w-full caption-bottom text-sm", className),
    ...props
  }
) }));
Table.displayName = "Table";
var TableHeader = React23.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx55("thead", { ref, className: cn("[&_tr]:border-b", className), ...props }));
TableHeader.displayName = "TableHeader";
var TableBody = React23.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx55(
  "tbody",
  {
    ref,
    className: cn("[&_tr:last-child]:border-0", className),
    ...props
  }
));
TableBody.displayName = "TableBody";
var TableFooter = React23.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx55(
  "tfoot",
  {
    ref,
    className: cn(
      "border-t bg-muted/50 font-medium [&>tr]:last:border-b-0",
      className
    ),
    ...props
  }
));
TableFooter.displayName = "TableFooter";
var TableRow = React23.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx55(
  "tr",
  {
    ref,
    className: cn(
      "border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",
      className
    ),
    ...props
  }
));
TableRow.displayName = "TableRow";
var TableHead = React23.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx55(
  "th",
  {
    ref,
    className: cn(
      "h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0",
      className
    ),
    ...props
  }
));
TableHead.displayName = "TableHead";
var TableCell = React23.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx55(
  "td",
  {
    ref,
    className: cn("p-4 align-middle [&:has([role=checkbox])]:pr-0", className),
    ...props
  }
));
TableCell.displayName = "TableCell";
var TableCaption = React23.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx55(
  "caption",
  {
    ref,
    className: cn("mt-4 text-sm text-muted-foreground", className),
    ...props
  }
));
TableCaption.displayName = "TableCaption";

// app/components/tasks/data-table-pagination.tsx
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  DoubleArrowLeftIcon,
  DoubleArrowRightIcon
} from "@radix-ui/react-icons";
import { jsx as jsx56, jsxs as jsxs36 } from "react/jsx-runtime";
function DataTablePagination({
  table
}) {
  return /* @__PURE__ */ jsxs36("div", { className: "flex items-center justify-between px-2", children: [
    /* @__PURE__ */ jsxs36("div", { className: "flex-1 text-sm text-muted-foreground", children: [
      table.getFilteredSelectedRowModel().rows.length,
      " of",
      " ",
      table.getFilteredRowModel().rows.length,
      " row(s) selected."
    ] }),
    /* @__PURE__ */ jsxs36("div", { className: "flex items-center space-x-6 lg:space-x-8", children: [
      /* @__PURE__ */ jsxs36("div", { className: "flex items-center space-x-2", children: [
        /* @__PURE__ */ jsx56("p", { className: "text-sm font-medium", children: "Rows per page" }),
        /* @__PURE__ */ jsxs36(
          Select,
          {
            value: `${table.getState().pagination.pageSize}`,
            onValueChange: (value) => {
              table.setPageSize(Number(value));
            },
            children: [
              /* @__PURE__ */ jsx56(SelectTrigger, { className: "h-8 w-[70px]", children: /* @__PURE__ */ jsx56(SelectValue, { placeholder: table.getState().pagination.pageSize }) }),
              /* @__PURE__ */ jsx56(SelectContent, { side: "top", children: [10, 20, 30, 40, 50].map((pageSize) => /* @__PURE__ */ jsx56(SelectItem, { value: `${pageSize}`, children: pageSize }, pageSize)) })
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsxs36("div", { className: "flex w-[100px] items-center justify-center text-sm font-medium", children: [
        "Page ",
        table.getState().pagination.pageIndex + 1,
        " of",
        " ",
        table.getPageCount()
      ] }),
      /* @__PURE__ */ jsxs36("div", { className: "flex items-center space-x-2", children: [
        /* @__PURE__ */ jsxs36(
          Button,
          {
            variant: "outline",
            className: "hidden h-8 w-8 p-0 lg:flex",
            onClick: () => table.setPageIndex(0),
            disabled: !table.getCanPreviousPage(),
            children: [
              /* @__PURE__ */ jsx56("span", { className: "sr-only", children: "Go to first page" }),
              /* @__PURE__ */ jsx56(DoubleArrowLeftIcon, { className: "h-4 w-4" })
            ]
          }
        ),
        /* @__PURE__ */ jsxs36(
          Button,
          {
            variant: "outline",
            className: "h-8 w-8 p-0",
            onClick: () => table.previousPage(),
            disabled: !table.getCanPreviousPage(),
            children: [
              /* @__PURE__ */ jsx56("span", { className: "sr-only", children: "Go to previous page" }),
              /* @__PURE__ */ jsx56(ChevronLeftIcon, { className: "h-4 w-4" })
            ]
          }
        ),
        /* @__PURE__ */ jsxs36(
          Button,
          {
            variant: "outline",
            className: "h-8 w-8 p-0",
            onClick: () => table.nextPage(),
            disabled: !table.getCanNextPage(),
            children: [
              /* @__PURE__ */ jsx56("span", { className: "sr-only", children: "Go to next page" }),
              /* @__PURE__ */ jsx56(ChevronRightIcon, { className: "h-4 w-4" })
            ]
          }
        ),
        /* @__PURE__ */ jsxs36(
          Button,
          {
            variant: "outline",
            className: "hidden h-8 w-8 p-0 lg:flex",
            onClick: () => table.setPageIndex(table.getPageCount() - 1),
            disabled: !table.getCanNextPage(),
            children: [
              /* @__PURE__ */ jsx56("span", { className: "sr-only", children: "Go to last page" }),
              /* @__PURE__ */ jsx56(DoubleArrowRightIcon, { className: "h-4 w-4" })
            ]
          }
        )
      ] })
    ] })
  ] });
}

// app/components/tasks/data-table-toolbar.tsx
import { Cross2Icon } from "@radix-ui/react-icons";

// app/components/tasks/data-table-view-options.tsx
import { DropdownMenuTrigger as DropdownMenuTrigger2 } from "@radix-ui/react-dropdown-menu";
import { MixerHorizontalIcon } from "@radix-ui/react-icons";
import { jsx as jsx57, jsxs as jsxs37 } from "react/jsx-runtime";
function DataTableViewOptions({
  table
}) {
  return /* @__PURE__ */ jsxs37(DropdownMenu, { children: [
    /* @__PURE__ */ jsx57(DropdownMenuTrigger2, { asChild: !0, children: /* @__PURE__ */ jsxs37(
      Button,
      {
        variant: "outline",
        size: "sm",
        className: "ml-auto hidden h-8 lg:flex",
        children: [
          /* @__PURE__ */ jsx57(MixerHorizontalIcon, { className: "mr-2 h-4 w-4" }),
          "View"
        ]
      }
    ) }),
    /* @__PURE__ */ jsxs37(DropdownMenuContent, { align: "end", className: "w-[150px]", children: [
      /* @__PURE__ */ jsx57(DropdownMenuLabel, { children: "Toggle columns" }),
      /* @__PURE__ */ jsx57(DropdownMenuSeparator, {}),
      table.getAllColumns().filter(
        (column) => typeof column.accessorFn < "u" && column.getCanHide()
      ).map((column) => /* @__PURE__ */ jsx57(
        DropdownMenuCheckboxItem,
        {
          className: "capitalize",
          checked: column.getIsVisible(),
          onCheckedChange: (value) => column.toggleVisibility(!!value),
          children: column.id
        },
        column.id
      ))
    ] })
  ] });
}

// app/components/tasks/data-table-faceted-filter.tsx
import { CheckIcon as CheckIcon3, PlusCircledIcon as PlusCircledIcon4 } from "@radix-ui/react-icons";
import { Fragment as Fragment2, jsx as jsx58, jsxs as jsxs38 } from "react/jsx-runtime";
function DataTableFacetedFilter({
  column,
  title,
  options
}) {
  let facets = column?.getFacetedUniqueValues(), selectedValues = new Set(column?.getFilterValue());
  return /* @__PURE__ */ jsxs38(Popover, { children: [
    /* @__PURE__ */ jsx58(PopoverTrigger, { asChild: !0, children: /* @__PURE__ */ jsxs38(Button, { variant: "outline", size: "sm", className: "h-8 border-dashed", children: [
      /* @__PURE__ */ jsx58(PlusCircledIcon4, { className: "mr-2 h-4 w-4" }),
      title,
      selectedValues?.size > 0 && /* @__PURE__ */ jsxs38(Fragment2, { children: [
        /* @__PURE__ */ jsx58(Separator, { orientation: "vertical", className: "mx-2 h-4" }),
        /* @__PURE__ */ jsx58(
          Badge,
          {
            variant: "secondary",
            className: "rounded-sm px-1 font-normal lg:hidden",
            children: selectedValues.size
          }
        ),
        /* @__PURE__ */ jsx58("div", { className: "hidden space-x-1 lg:flex", children: selectedValues.size > 2 ? /* @__PURE__ */ jsxs38(
          Badge,
          {
            variant: "secondary",
            className: "rounded-sm px-1 font-normal",
            children: [
              selectedValues.size,
              " selected"
            ]
          }
        ) : options.filter((option) => selectedValues.has(option.value)).map((option) => /* @__PURE__ */ jsx58(
          Badge,
          {
            variant: "secondary",
            className: "rounded-sm px-1 font-normal",
            children: option.label
          },
          option.value
        )) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx58(PopoverContent, { className: "w-[200px] p-0", align: "start", children: /* @__PURE__ */ jsxs38(Command, { children: [
      /* @__PURE__ */ jsx58(CommandInput, { placeholder: title }),
      /* @__PURE__ */ jsxs38(CommandList, { children: [
        /* @__PURE__ */ jsx58(CommandEmpty, { children: "No results found." }),
        /* @__PURE__ */ jsx58(CommandGroup, { children: options.map((option) => {
          let isSelected = selectedValues.has(option.value);
          return /* @__PURE__ */ jsxs38(
            CommandItem,
            {
              onSelect: () => {
                isSelected ? selectedValues.delete(option.value) : selectedValues.add(option.value);
                let filterValues = Array.from(selectedValues);
                column?.setFilterValue(
                  filterValues.length ? filterValues : void 0
                );
              },
              children: [
                /* @__PURE__ */ jsx58(
                  "div",
                  {
                    className: cn(
                      "mr-2 flex h-4 w-4 items-center justify-center rounded-sm border border-primary",
                      isSelected ? "bg-primary text-primary-foreground" : "opacity-50 [&_svg]:invisible"
                    ),
                    children: /* @__PURE__ */ jsx58(CheckIcon3, { className: cn("h-4 w-4") })
                  }
                ),
                option.icon && /* @__PURE__ */ jsx58(option.icon, { className: "mr-2 h-4 w-4 text-muted-foreground" }),
                /* @__PURE__ */ jsx58("span", { children: option.label }),
                facets?.get(option.value) && /* @__PURE__ */ jsx58("span", { className: "ml-auto flex h-4 w-4 items-center justify-center font-mono text-xs", children: facets.get(option.value) })
              ]
            },
            option.value
          );
        }) }),
        selectedValues.size > 0 && /* @__PURE__ */ jsxs38(Fragment2, { children: [
          /* @__PURE__ */ jsx58(CommandSeparator, {}),
          /* @__PURE__ */ jsx58(CommandGroup, { children: /* @__PURE__ */ jsx58(
            CommandItem,
            {
              onSelect: () => column?.setFilterValue(void 0),
              className: "justify-center text-center",
              children: "Clear filters"
            }
          ) })
        ] })
      ] })
    ] }) })
  ] });
}

// app/components/tasks/data-table-toolbar.tsx
import { jsx as jsx59, jsxs as jsxs39 } from "react/jsx-runtime";
function DataTableToolbar({
  table
}) {
  let isFiltered = table.getState().columnFilters.length > 0;
  return /* @__PURE__ */ jsxs39("div", { className: "flex items-center justify-between", children: [
    /* @__PURE__ */ jsxs39("div", { className: "flex flex-1 items-center space-x-2", children: [
      /* @__PURE__ */ jsx59(
        Input,
        {
          placeholder: "Filter tasks...",
          value: table.getColumn("title")?.getFilterValue() ?? "",
          onChange: (event) => table.getColumn("title")?.setFilterValue(event.target.value),
          className: "h-8 w-[150px] lg:w-[250px]"
        }
      ),
      table.getColumn("status") && /* @__PURE__ */ jsx59(
        DataTableFacetedFilter,
        {
          column: table.getColumn("status"),
          title: "Status",
          options: statuses
        }
      ),
      table.getColumn("priority") && /* @__PURE__ */ jsx59(
        DataTableFacetedFilter,
        {
          column: table.getColumn("priority"),
          title: "Priority",
          options: priorities
        }
      ),
      isFiltered && /* @__PURE__ */ jsxs39(
        Button,
        {
          variant: "ghost",
          onClick: () => table.resetColumnFilters(),
          className: "h-8 px-2 lg:px-3",
          children: [
            "Reset",
            /* @__PURE__ */ jsx59(Cross2Icon, { className: "ml-2 h-4 w-4" })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsx59(DataTableViewOptions, { table })
  ] });
}

// app/components/tasks/data-table.tsx
import { jsx as jsx60, jsxs as jsxs40 } from "react/jsx-runtime";
function DataTable({
  columns: columns2,
  data: data2
}) {
  let [rowSelection, setRowSelection] = React24.useState({}), [columnVisibility, setColumnVisibility] = React24.useState({}), [columnFilters, setColumnFilters] = React24.useState(
    []
  ), [sorting, setSorting] = React24.useState([]), table = useReactTable({
    data: data2,
    columns: columns2,
    state: {
      sorting,
      columnVisibility,
      rowSelection,
      columnFilters
    },
    enableRowSelection: !0,
    onRowSelectionChange: setRowSelection,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    onColumnVisibilityChange: setColumnVisibility,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFacetedRowModel: getFacetedRowModel(),
    getFacetedUniqueValues: getFacetedUniqueValues()
  });
  return /* @__PURE__ */ jsxs40("div", { className: "space-y-4", children: [
    /* @__PURE__ */ jsx60(DataTableToolbar, { table }),
    /* @__PURE__ */ jsx60("div", { className: "rounded-md border", children: /* @__PURE__ */ jsxs40(Table, { children: [
      /* @__PURE__ */ jsx60(TableHeader, { children: table.getHeaderGroups().map((headerGroup) => /* @__PURE__ */ jsx60(TableRow, { children: headerGroup.headers.map((header) => /* @__PURE__ */ jsx60(TableHead, { colSpan: header.colSpan, children: header.isPlaceholder ? null : flexRender(
        header.column.columnDef.header,
        header.getContext()
      ) }, header.id)) }, headerGroup.id)) }),
      /* @__PURE__ */ jsx60(TableBody, { children: table.getRowModel().rows?.length ? table.getRowModel().rows.map((row) => /* @__PURE__ */ jsx60(
        TableRow,
        {
          "data-state": row.getIsSelected() && "selected",
          children: row.getVisibleCells().map((cell) => /* @__PURE__ */ jsx60(TableCell, { children: flexRender(
            cell.column.columnDef.cell,
            cell.getContext()
          ) }, cell.id))
        },
        row.id
      )) : /* @__PURE__ */ jsx60(TableRow, { children: /* @__PURE__ */ jsx60(
        TableCell,
        {
          colSpan: columns2.length,
          className: "h-24 text-center",
          children: "No results."
        }
      ) }) })
    ] }) }),
    /* @__PURE__ */ jsx60(DataTablePagination, { table })
  ] });
}

// app/components/tasks/user-nav.tsx
import { jsx as jsx61, jsxs as jsxs41 } from "react/jsx-runtime";
var dropdownMenuGroupItems1 = [
  { title: "Profile", shortcut: "\u21E7\u2318P" },
  { title: "Billing", shortcut: "\u2318B" },
  { title: "Settings", shortcut: "\u2318S" }
], dropdownMenuGroupItems2 = [{ title: "Log out", shortcut: "\u21E7\u2318Q" }];
function UserNav2() {
  return /* @__PURE__ */ jsxs41(DropdownMenu, { children: [
    /* @__PURE__ */ jsx61(DropdownMenuTrigger, { asChild: !0, children: /* @__PURE__ */ jsx61(Button, { variant: "ghost", className: "relative h-8 w-8 rounded-full", children: /* @__PURE__ */ jsxs41(Avatar, { className: "h-9 w-9", children: [
      /* @__PURE__ */ jsx61(AvatarImage, { src: __default3, alt: "@shadcn" }),
      /* @__PURE__ */ jsx61(AvatarFallback, { children: "SC" })
    ] }) }) }),
    /* @__PURE__ */ jsxs41(DropdownMenuContent, { className: "w-56", align: "end", forceMount: !0, children: [
      /* @__PURE__ */ jsx61(DropdownMenuLabel, { className: "font-normal", children: /* @__PURE__ */ jsxs41("div", { className: "flex flex-col space-y-1", children: [
        /* @__PURE__ */ jsx61("p", { className: "text-sm font-medium leading-none", children: "shadcn" }),
        /* @__PURE__ */ jsx61("p", { className: "text-xs leading-none text-muted-foreground", children: "m@example.com" })
      ] }) }),
      /* @__PURE__ */ jsx61(DropdownMenuSeparator, {}),
      /* @__PURE__ */ jsxs41(DropdownMenuGroup, { children: [
        dropdownMenuGroupItems1.map((e, index) => /* @__PURE__ */ jsxs41(DropdownMenuItem, { children: [
          e.title,
          /* @__PURE__ */ jsx61(DropdownMenuShortcut, { children: e.shortcut })
        ] }, `dropdown-1-${index}`)),
        /* @__PURE__ */ jsx61(DropdownMenuItem, { children: "New Team" })
      ] }),
      /* @__PURE__ */ jsx61(DropdownMenuSeparator, {}),
      dropdownMenuGroupItems2.map((e, index) => /* @__PURE__ */ jsxs41(DropdownMenuItem, { children: [
        e.title,
        /* @__PURE__ */ jsx61(DropdownMenuShortcut, { children: e.shortcut })
      ] }, `dropdown-2-${index}`))
    ] })
  ] });
}

// app/routes/tasks.tsx
import { jsx as jsx62, jsxs as jsxs42 } from "react/jsx-runtime";
var tasks = [
  {
    id: "TASK-8782",
    title: "You can't compress the program without quantifying the open-source SSD pixel!",
    status: "in progress",
    label: "documentation",
    priority: "medium"
  },
  {
    id: "TASK-7878",
    title: "Try to calculate the EXE feed, maybe it will index the multi-byte pixel!",
    status: "backlog",
    label: "documentation",
    priority: "medium"
  },
  {
    id: "TASK-7839",
    title: "We need to bypass the neural TCP card!",
    status: "todo",
    label: "bug",
    priority: "high"
  },
  {
    id: "TASK-5562",
    title: "The SAS interface is down, bypass the open-source pixel so we can back up the PNG bandwidth!",
    status: "backlog",
    label: "feature",
    priority: "medium"
  },
  {
    id: "TASK-8686",
    title: "I'll parse the wireless SSL protocol, that should driver the API panel!",
    status: "canceled",
    label: "feature",
    priority: "medium"
  },
  {
    id: "TASK-1280",
    title: "Use the digital TLS panel, then you can transmit the haptic system!",
    status: "done",
    label: "bug",
    priority: "high"
  },
  {
    id: "TASK-7262",
    title: "The UTF8 application is down, parse the neural bandwidth so we can back up the PNG firewall!",
    status: "done",
    label: "feature",
    priority: "high"
  },
  {
    id: "TASK-1138",
    title: "Generating the driver won't do anything, we need to quantify the 1080p SMTP bandwidth!",
    status: "in progress",
    label: "feature",
    priority: "medium"
  },
  {
    id: "TASK-7184",
    title: "We need to program the back-end THX pixel!",
    status: "todo",
    label: "feature",
    priority: "low"
  },
  {
    id: "TASK-5160",
    title: "Calculating the bus won't do anything, we need to navigate the back-end JSON protocol!",
    status: "in progress",
    label: "documentation",
    priority: "high"
  },
  {
    id: "TASK-5618",
    title: "Generating the driver won't do anything, we need to index the online SSL application!",
    status: "done",
    label: "documentation",
    priority: "medium"
  },
  {
    id: "TASK-6699",
    title: "I'll transmit the wireless JBOD capacitor, that should hard drive the SSD feed!",
    status: "backlog",
    label: "documentation",
    priority: "medium"
  },
  {
    id: "TASK-2858",
    title: "We need to override the online UDP bus!",
    status: "backlog",
    label: "bug",
    priority: "medium"
  },
  {
    id: "TASK-9864",
    title: "I'll reboot the 1080p FTP panel, that should matrix the HEX hard drive!",
    status: "done",
    label: "bug",
    priority: "high"
  },
  {
    id: "TASK-8404",
    title: "We need to generate the virtual HEX alarm!",
    status: "in progress",
    label: "bug",
    priority: "low"
  },
  {
    id: "TASK-5365",
    title: "Backing up the pixel won't do anything, we need to transmit the primary IB array!",
    status: "in progress",
    label: "documentation",
    priority: "low"
  },
  {
    id: "TASK-1780",
    title: "The CSS feed is down, index the bluetooth transmitter so we can compress the CLI protocol!",
    status: "todo",
    label: "documentation",
    priority: "high"
  },
  {
    id: "TASK-6938",
    title: "Use the redundant SCSI application, then you can hack the optical alarm!",
    status: "todo",
    label: "documentation",
    priority: "high"
  },
  {
    id: "TASK-9885",
    title: "We need to compress the auxiliary VGA driver!",
    status: "backlog",
    label: "bug",
    priority: "high"
  },
  {
    id: "TASK-3216",
    title: "Transmitting the transmitter won't do anything, we need to compress the virtual HDD sensor!",
    status: "backlog",
    label: "documentation",
    priority: "medium"
  },
  {
    id: "TASK-9285",
    title: "The IP monitor is down, copy the haptic alarm so we can generate the HTTP transmitter!",
    status: "todo",
    label: "bug",
    priority: "high"
  },
  {
    id: "TASK-1024",
    title: "Overriding the microchip won't do anything, we need to transmit the digital OCR transmitter!",
    status: "in progress",
    label: "documentation",
    priority: "low"
  },
  {
    id: "TASK-7068",
    title: "You can't generate the capacitor without indexing the wireless HEX pixel!",
    status: "canceled",
    label: "bug",
    priority: "low"
  },
  {
    id: "TASK-6502",
    title: "Navigating the microchip won't do anything, we need to bypass the back-end SQL bus!",
    status: "todo",
    label: "bug",
    priority: "high"
  },
  {
    id: "TASK-5326",
    title: "We need to hack the redundant UTF8 transmitter!",
    status: "todo",
    label: "bug",
    priority: "low"
  },
  {
    id: "TASK-6274",
    title: "Use the virtual PCI circuit, then you can parse the bluetooth alarm!",
    status: "canceled",
    label: "documentation",
    priority: "low"
  },
  {
    id: "TASK-1571",
    title: "I'll input the neural DRAM circuit, that should protocol the SMTP interface!",
    status: "in progress",
    label: "feature",
    priority: "medium"
  },
  {
    id: "TASK-9518",
    title: "Compressing the interface won't do anything, we need to compress the online SDD matrix!",
    status: "canceled",
    label: "documentation",
    priority: "medium"
  },
  {
    id: "TASK-5581",
    title: "I'll synthesize the digital COM pixel, that should transmitter the UTF8 protocol!",
    status: "backlog",
    label: "documentation",
    priority: "high"
  },
  {
    id: "TASK-2197",
    title: "Parsing the feed won't do anything, we need to copy the bluetooth DRAM bus!",
    status: "todo",
    label: "documentation",
    priority: "low"
  },
  {
    id: "TASK-8484",
    title: "We need to parse the solid state UDP firewall!",
    status: "in progress",
    label: "bug",
    priority: "low"
  },
  {
    id: "TASK-9892",
    title: "If we back up the application, we can get to the UDP application through the multi-byte THX capacitor!",
    status: "done",
    label: "documentation",
    priority: "high"
  },
  {
    id: "TASK-9616",
    title: "We need to synthesize the cross-platform ASCII pixel!",
    status: "in progress",
    label: "feature",
    priority: "medium"
  },
  {
    id: "TASK-9744",
    title: "Use the back-end IP card, then you can input the solid state hard drive!",
    status: "done",
    label: "documentation",
    priority: "low"
  },
  {
    id: "TASK-1376",
    title: "Generating the alarm won't do anything, we need to generate the mobile IP capacitor!",
    status: "backlog",
    label: "documentation",
    priority: "low"
  },
  {
    id: "TASK-7382",
    title: "If we back up the firewall, we can get to the RAM alarm through the primary UTF8 pixel!",
    status: "todo",
    label: "feature",
    priority: "low"
  },
  {
    id: "TASK-2290",
    title: "I'll compress the virtual JSON panel, that should application the UTF8 bus!",
    status: "canceled",
    label: "documentation",
    priority: "high"
  },
  {
    id: "TASK-1533",
    title: "You can't input the firewall without overriding the wireless TCP firewall!",
    status: "done",
    label: "bug",
    priority: "high"
  },
  {
    id: "TASK-4920",
    title: "Bypassing the hard drive won't do anything, we need to input the bluetooth JSON program!",
    status: "in progress",
    label: "bug",
    priority: "high"
  },
  {
    id: "TASK-5168",
    title: "If we synthesize the bus, we can get to the IP panel through the virtual TLS array!",
    status: "in progress",
    label: "feature",
    priority: "low"
  },
  {
    id: "TASK-7103",
    title: "We need to parse the multi-byte EXE bandwidth!",
    status: "canceled",
    label: "feature",
    priority: "low"
  },
  {
    id: "TASK-4314",
    title: "If we compress the program, we can get to the XML alarm through the multi-byte COM matrix!",
    status: "in progress",
    label: "bug",
    priority: "high"
  },
  {
    id: "TASK-3415",
    title: "Use the cross-platform XML application, then you can quantify the solid state feed!",
    status: "todo",
    label: "feature",
    priority: "high"
  },
  {
    id: "TASK-8339",
    title: "Try to calculate the DNS interface, maybe it will input the bluetooth capacitor!",
    status: "in progress",
    label: "feature",
    priority: "low"
  },
  {
    id: "TASK-6995",
    title: "Try to hack the XSS bandwidth, maybe it will override the bluetooth matrix!",
    status: "todo",
    label: "feature",
    priority: "high"
  },
  {
    id: "TASK-8053",
    title: "If we connect the program, we can get to the UTF8 matrix through the digital UDP protocol!",
    status: "todo",
    label: "feature",
    priority: "medium"
  },
  {
    id: "TASK-4336",
    title: "If we synthesize the microchip, we can get to the SAS sensor through the optical UDP program!",
    status: "todo",
    label: "documentation",
    priority: "low"
  },
  {
    id: "TASK-8790",
    title: "I'll back up the optical COM alarm, that should alarm the RSS capacitor!",
    status: "done",
    label: "bug",
    priority: "medium"
  },
  {
    id: "TASK-8980",
    title: "Try to navigate the SQL transmitter, maybe it will back up the virtual firewall!",
    status: "canceled",
    label: "bug",
    priority: "low"
  },
  {
    id: "TASK-7342",
    title: "Use the neural CLI card, then you can parse the online port!",
    status: "backlog",
    label: "documentation",
    priority: "low"
  },
  {
    id: "TASK-5608",
    title: "I'll hack the haptic SSL program, that should bus the UDP transmitter!",
    status: "canceled",
    label: "documentation",
    priority: "low"
  },
  {
    id: "TASK-1606",
    title: "I'll generate the bluetooth PNG firewall, that should pixel the SSL driver!",
    status: "done",
    label: "feature",
    priority: "medium"
  },
  {
    id: "TASK-7872",
    title: "Transmitting the circuit won't do anything, we need to reboot the 1080p RSS monitor!",
    status: "canceled",
    label: "feature",
    priority: "medium"
  },
  {
    id: "TASK-4167",
    title: "Use the cross-platform SMS circuit, then you can synthesize the optical feed!",
    status: "canceled",
    label: "bug",
    priority: "medium"
  },
  {
    id: "TASK-9581",
    title: "You can't index the port without hacking the cross-platform XSS monitor!",
    status: "backlog",
    label: "documentation",
    priority: "low"
  },
  {
    id: "TASK-8806",
    title: "We need to bypass the back-end SSL panel!",
    status: "done",
    label: "bug",
    priority: "medium"
  },
  {
    id: "TASK-6542",
    title: "Try to quantify the RSS firewall, maybe it will quantify the open-source system!",
    status: "done",
    label: "feature",
    priority: "low"
  },
  {
    id: "TASK-6806",
    title: "The VGA protocol is down, reboot the back-end matrix so we can parse the CSS panel!",
    status: "canceled",
    label: "documentation",
    priority: "low"
  },
  {
    id: "TASK-9549",
    title: "You can't bypass the bus without connecting the neural JBOD bus!",
    status: "todo",
    label: "feature",
    priority: "high"
  },
  {
    id: "TASK-1075",
    title: "Backing up the driver won't do anything, we need to parse the redundant RAM pixel!",
    status: "done",
    label: "feature",
    priority: "medium"
  },
  {
    id: "TASK-1427",
    title: "Use the auxiliary PCI circuit, then you can calculate the cross-platform interface!",
    status: "done",
    label: "documentation",
    priority: "high"
  },
  {
    id: "TASK-1907",
    title: "Hacking the circuit won't do anything, we need to back up the online DRAM system!",
    status: "todo",
    label: "documentation",
    priority: "high"
  },
  {
    id: "TASK-4309",
    title: "If we generate the system, we can get to the TCP sensor through the optical GB pixel!",
    status: "backlog",
    label: "bug",
    priority: "medium"
  },
  {
    id: "TASK-3973",
    title: "I'll parse the back-end ADP array, that should bandwidth the RSS bandwidth!",
    status: "todo",
    label: "feature",
    priority: "medium"
  },
  {
    id: "TASK-7962",
    title: "Use the wireless RAM program, then you can hack the cross-platform feed!",
    status: "canceled",
    label: "bug",
    priority: "low"
  },
  {
    id: "TASK-3360",
    title: "You can't quantify the program without synthesizing the neural OCR interface!",
    status: "done",
    label: "feature",
    priority: "medium"
  },
  {
    id: "TASK-9887",
    title: "Use the auxiliary ASCII sensor, then you can connect the solid state port!",
    status: "backlog",
    label: "bug",
    priority: "medium"
  },
  {
    id: "TASK-3649",
    title: "I'll input the virtual USB system, that should circuit the DNS monitor!",
    status: "in progress",
    label: "feature",
    priority: "medium"
  },
  {
    id: "TASK-3586",
    title: "If we quantify the circuit, we can get to the CLI feed through the mobile SMS hard drive!",
    status: "in progress",
    label: "bug",
    priority: "low"
  },
  {
    id: "TASK-5150",
    title: "I'll hack the wireless XSS port, that should transmitter the IP interface!",
    status: "canceled",
    label: "feature",
    priority: "medium"
  },
  {
    id: "TASK-3652",
    title: "The SQL interface is down, override the optical bus so we can program the ASCII interface!",
    status: "backlog",
    label: "feature",
    priority: "low"
  },
  {
    id: "TASK-6884",
    title: "Use the digital PCI circuit, then you can synthesize the multi-byte microchip!",
    status: "canceled",
    label: "feature",
    priority: "high"
  },
  {
    id: "TASK-1591",
    title: "We need to connect the mobile XSS driver!",
    status: "in progress",
    label: "feature",
    priority: "high"
  },
  {
    id: "TASK-3802",
    title: "Try to override the ASCII protocol, maybe it will parse the virtual matrix!",
    status: "in progress",
    label: "feature",
    priority: "low"
  },
  {
    id: "TASK-7253",
    title: "Programming the capacitor won't do anything, we need to bypass the neural IB hard drive!",
    status: "backlog",
    label: "bug",
    priority: "high"
  },
  {
    id: "TASK-9739",
    title: "We need to hack the multi-byte HDD bus!",
    status: "done",
    label: "documentation",
    priority: "medium"
  },
  {
    id: "TASK-4424",
    title: "Try to hack the HEX alarm, maybe it will connect the optical pixel!",
    status: "in progress",
    label: "documentation",
    priority: "medium"
  },
  {
    id: "TASK-3922",
    title: "You can't back up the capacitor without generating the wireless PCI program!",
    status: "backlog",
    label: "bug",
    priority: "low"
  },
  {
    id: "TASK-4921",
    title: "I'll index the open-source IP feed, that should system the GB application!",
    status: "canceled",
    label: "bug",
    priority: "low"
  },
  {
    id: "TASK-5814",
    title: "We need to calculate the 1080p AGP feed!",
    status: "backlog",
    label: "bug",
    priority: "high"
  },
  {
    id: "TASK-2645",
    title: "Synthesizing the system won't do anything, we need to navigate the multi-byte HDD firewall!",
    status: "todo",
    label: "documentation",
    priority: "medium"
  },
  {
    id: "TASK-4535",
    title: "Try to copy the JSON circuit, maybe it will connect the wireless feed!",
    status: "in progress",
    label: "feature",
    priority: "low"
  },
  {
    id: "TASK-4463",
    title: "We need to copy the solid state AGP monitor!",
    status: "done",
    label: "documentation",
    priority: "low"
  },
  {
    id: "TASK-9745",
    title: "If we connect the protocol, we can get to the GB system through the bluetooth PCI microchip!",
    status: "canceled",
    label: "feature",
    priority: "high"
  },
  {
    id: "TASK-2080",
    title: "If we input the bus, we can get to the RAM matrix through the auxiliary RAM card!",
    status: "todo",
    label: "bug",
    priority: "medium"
  },
  {
    id: "TASK-3838",
    title: "I'll bypass the online TCP application, that should panel the AGP system!",
    status: "backlog",
    label: "bug",
    priority: "high"
  },
  {
    id: "TASK-1340",
    title: "We need to navigate the virtual PNG circuit!",
    status: "todo",
    label: "bug",
    priority: "medium"
  },
  {
    id: "TASK-6665",
    title: "If we parse the monitor, we can get to the SSD hard drive through the cross-platform AGP alarm!",
    status: "canceled",
    label: "feature",
    priority: "low"
  },
  {
    id: "TASK-7585",
    title: "If we calculate the hard drive, we can get to the SSL program through the multi-byte CSS microchip!",
    status: "backlog",
    label: "feature",
    priority: "low"
  },
  {
    id: "TASK-6319",
    title: "We need to copy the multi-byte SCSI program!",
    status: "backlog",
    label: "bug",
    priority: "high"
  },
  {
    id: "TASK-4369",
    title: "Try to input the SCSI bus, maybe it will generate the 1080p pixel!",
    status: "backlog",
    label: "bug",
    priority: "high"
  },
  {
    id: "TASK-9035",
    title: "We need to override the solid state PNG array!",
    status: "canceled",
    label: "documentation",
    priority: "low"
  },
  {
    id: "TASK-3970",
    title: "You can't index the transmitter without quantifying the haptic ASCII card!",
    status: "todo",
    label: "documentation",
    priority: "medium"
  },
  {
    id: "TASK-4473",
    title: "You can't bypass the protocol without overriding the neural RSS program!",
    status: "todo",
    label: "documentation",
    priority: "low"
  },
  {
    id: "TASK-4136",
    title: "You can't hack the hard drive without hacking the primary JSON program!",
    status: "canceled",
    label: "bug",
    priority: "medium"
  },
  {
    id: "TASK-3939",
    title: "Use the back-end SQL firewall, then you can connect the neural hard drive!",
    status: "done",
    label: "feature",
    priority: "low"
  },
  {
    id: "TASK-2007",
    title: "I'll input the back-end USB protocol, that should bandwidth the PCI system!",
    status: "backlog",
    label: "bug",
    priority: "high"
  },
  {
    id: "TASK-7516",
    title: "Use the primary SQL program, then you can generate the auxiliary transmitter!",
    status: "done",
    label: "documentation",
    priority: "medium"
  },
  {
    id: "TASK-6906",
    title: "Try to back up the DRAM system, maybe it will reboot the online transmitter!",
    status: "done",
    label: "feature",
    priority: "high"
  },
  {
    id: "TASK-5207",
    title: "The SMS interface is down, copy the bluetooth bus so we can quantify the VGA card!",
    status: "in progress",
    label: "bug",
    priority: "low"
  }
];
function Tasks() {
  return /* @__PURE__ */ jsxs42("div", { className: "h-full flex-1 flex-col space-y-8 p-8 md:flex", children: [
    /* @__PURE__ */ jsxs42("div", { className: "flex items-center justify-between space-y-2", children: [
      /* @__PURE__ */ jsxs42("div", { children: [
        /* @__PURE__ */ jsx62("h2", { className: "text-2xl font-bold tracking-tight", children: "Welcome back!" }),
        /* @__PURE__ */ jsx62("p", { className: "text-muted-foreground", children: "Here's a list of your tasks for this month!" })
      ] }),
      /* @__PURE__ */ jsx62("div", { className: "flex items-center space-x-2", children: /* @__PURE__ */ jsx62(UserNav2, {}) })
    ] }),
    /* @__PURE__ */ jsx62(DataTable, { data: tasks, columns })
  ] });
}

// app/routes/mail.tsx
var mail_exports = {};
__export(mail_exports, {
  default: () => Mail3
});

// app/components/mail/mail.tsx
import * as React28 from "react";
import {
  AlertCircle,
  Archive as Archive2,
  ArchiveX as ArchiveX2,
  File,
  Inbox,
  MessagesSquare,
  Search as Search3,
  Send,
  ShoppingCart,
  Trash2 as Trash22,
  Users2
} from "lucide-react";

// app/components/mail/account-switcher.tsx
import * as React25 from "react";
import { jsx as jsx63, jsxs as jsxs43 } from "react/jsx-runtime";
function AccountSwitcher({
  isCollapsed,
  accounts: accounts2
}) {
  let [selectedAccount, setSelectedAccount] = React25.useState(
    accounts2[0].email
  );
  return /* @__PURE__ */ jsxs43(Select, { defaultValue: selectedAccount, onValueChange: setSelectedAccount, children: [
    /* @__PURE__ */ jsx63(
      SelectTrigger,
      {
        className: cn(
          "flex items-center gap-2 [&>span]:line-clamp-1 [&>span]:flex [&>span]:w-full [&>span]:items-center [&>span]:gap-1 [&>span]:truncate [&_svg]:h-4 [&_svg]:w-4 [&_svg]:shrink-0",
          isCollapsed && "flex h-9 w-9 shrink-0 items-center justify-center p-0 [&>span]:w-auto [&>svg]:hidden"
        ),
        "aria-label": "Select account",
        children: /* @__PURE__ */ jsxs43(SelectValue, { placeholder: "Select an account", children: [
          accounts2.find((account) => account.email === selectedAccount)?.icon,
          /* @__PURE__ */ jsx63("span", { className: cn("ml-2", isCollapsed && "hidden"), children: accounts2.find((account) => account.email === selectedAccount)?.label })
        ] })
      }
    ),
    /* @__PURE__ */ jsx63(SelectContent, { children: accounts2.map((account) => /* @__PURE__ */ jsx63(SelectItem, { value: account.email, children: /* @__PURE__ */ jsxs43("div", { className: "flex items-center gap-3 [&_svg]:h-4 [&_svg]:w-4 [&_svg]:shrink-0 [&_svg]:text-foreground", children: [
      account.icon,
      account.email
    ] }) }, account.email)) })
  ] });
}

// app/components/mail/mail-display.tsx
import { addDays as addDays2 } from "date-fns/addDays";
import { addHours } from "date-fns/addHours";
import { format as format3 } from "date-fns/format";
import { nextSaturday } from "date-fns/nextSaturday";
import {
  Archive,
  ArchiveX,
  Clock,
  Forward,
  MoreVertical,
  Reply,
  ReplyAll,
  Trash2
} from "lucide-react";

// app/components/ui/switch.tsx
import * as React26 from "react";
import * as SwitchPrimitives from "@radix-ui/react-switch";
import { jsx as jsx64 } from "react/jsx-runtime";
var Switch = React26.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx64(
  SwitchPrimitives.Root,
  {
    className: cn(
      "peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",
      className
    ),
    ...props,
    ref,
    children: /* @__PURE__ */ jsx64(
      SwitchPrimitives.Thumb,
      {
        className: cn(
          "pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0"
        )
      }
    )
  }
));
Switch.displayName = SwitchPrimitives.Root.displayName;

// app/components/ui/tooltip.tsx
import * as React27 from "react";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import { jsx as jsx65 } from "react/jsx-runtime";
var TooltipProvider = TooltipPrimitive.Provider, Tooltip = TooltipPrimitive.Root, TooltipTrigger = TooltipPrimitive.Trigger, TooltipContent = React27.forwardRef(({ className, sideOffset = 4, ...props }, ref) => /* @__PURE__ */ jsx65(
  TooltipPrimitive.Content,
  {
    ref,
    sideOffset,
    className: cn(
      "z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className
    ),
    ...props
  }
));
TooltipContent.displayName = TooltipPrimitive.Content.displayName;

// app/components/mail/mail-display.tsx
import { jsx as jsx66, jsxs as jsxs44 } from "react/jsx-runtime";
function MailDisplay({ mail }) {
  let today = /* @__PURE__ */ new Date();
  return /* @__PURE__ */ jsxs44("div", { className: "flex h-full flex-col", children: [
    /* @__PURE__ */ jsxs44("div", { className: "flex items-center p-2", children: [
      /* @__PURE__ */ jsxs44("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxs44(Tooltip, { children: [
          /* @__PURE__ */ jsx66(TooltipTrigger, { asChild: !0, children: /* @__PURE__ */ jsxs44(Button, { variant: "ghost", size: "icon", disabled: !mail, children: [
            /* @__PURE__ */ jsx66(Archive, { className: "h-4 w-4" }),
            /* @__PURE__ */ jsx66("span", { className: "sr-only", children: "Archive" })
          ] }) }),
          /* @__PURE__ */ jsx66(TooltipContent, { children: "Archive" })
        ] }),
        /* @__PURE__ */ jsxs44(Tooltip, { children: [
          /* @__PURE__ */ jsx66(TooltipTrigger, { asChild: !0, children: /* @__PURE__ */ jsxs44(Button, { variant: "ghost", size: "icon", disabled: !mail, children: [
            /* @__PURE__ */ jsx66(ArchiveX, { className: "h-4 w-4" }),
            /* @__PURE__ */ jsx66("span", { className: "sr-only", children: "Move to junk" })
          ] }) }),
          /* @__PURE__ */ jsx66(TooltipContent, { children: "Move to junk" })
        ] }),
        /* @__PURE__ */ jsxs44(Tooltip, { children: [
          /* @__PURE__ */ jsx66(TooltipTrigger, { asChild: !0, children: /* @__PURE__ */ jsxs44(Button, { variant: "ghost", size: "icon", disabled: !mail, children: [
            /* @__PURE__ */ jsx66(Trash2, { className: "h-4 w-4" }),
            /* @__PURE__ */ jsx66("span", { className: "sr-only", children: "Move to trash" })
          ] }) }),
          /* @__PURE__ */ jsx66(TooltipContent, { children: "Move to trash" })
        ] }),
        /* @__PURE__ */ jsx66(Separator, { orientation: "vertical", className: "mx-1 h-6" }),
        /* @__PURE__ */ jsxs44(Tooltip, { children: [
          /* @__PURE__ */ jsxs44(Popover, { children: [
            /* @__PURE__ */ jsx66(PopoverTrigger, { asChild: !0, children: /* @__PURE__ */ jsx66(TooltipTrigger, { asChild: !0, children: /* @__PURE__ */ jsxs44(Button, { variant: "ghost", size: "icon", disabled: !mail, children: [
              /* @__PURE__ */ jsx66(Clock, { className: "h-4 w-4" }),
              /* @__PURE__ */ jsx66("span", { className: "sr-only", children: "Snooze" })
            ] }) }) }),
            /* @__PURE__ */ jsxs44(PopoverContent, { className: "flex w-[535px] p-0", children: [
              /* @__PURE__ */ jsxs44("div", { className: "flex flex-col gap-2 border-r px-2 py-4", children: [
                /* @__PURE__ */ jsx66("div", { className: "px-4 text-sm font-medium", children: "Snooze until" }),
                /* @__PURE__ */ jsxs44("div", { className: "grid min-w-[250px] gap-1", children: [
                  /* @__PURE__ */ jsxs44(
                    Button,
                    {
                      variant: "ghost",
                      className: "justify-start font-normal",
                      children: [
                        "Later today",
                        " ",
                        /* @__PURE__ */ jsx66("span", { className: "ml-auto text-muted-foreground", children: format3(addHours(today, 4), "E, h:m b") })
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxs44(
                    Button,
                    {
                      variant: "ghost",
                      className: "justify-start font-normal",
                      children: [
                        "Tomorrow",
                        /* @__PURE__ */ jsx66("span", { className: "ml-auto text-muted-foreground", children: format3(addDays2(today, 1), "E, h:m b") })
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxs44(
                    Button,
                    {
                      variant: "ghost",
                      className: "justify-start font-normal",
                      children: [
                        "This weekend",
                        /* @__PURE__ */ jsx66("span", { className: "ml-auto text-muted-foreground", children: format3(nextSaturday(today), "E, h:m b") })
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxs44(
                    Button,
                    {
                      variant: "ghost",
                      className: "justify-start font-normal",
                      children: [
                        "Next week",
                        /* @__PURE__ */ jsx66("span", { className: "ml-auto text-muted-foreground", children: format3(addDays2(today, 7), "E, h:m b") })
                      ]
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ jsx66("div", { className: "p-2", children: /* @__PURE__ */ jsx66(Calendar, {}) })
            ] })
          ] }),
          /* @__PURE__ */ jsx66(TooltipContent, { children: "Snooze" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs44("div", { className: "ml-auto flex items-center gap-2", children: [
        /* @__PURE__ */ jsxs44(Tooltip, { children: [
          /* @__PURE__ */ jsx66(TooltipTrigger, { asChild: !0, children: /* @__PURE__ */ jsxs44(Button, { variant: "ghost", size: "icon", disabled: !mail, children: [
            /* @__PURE__ */ jsx66(Reply, { className: "h-4 w-4" }),
            /* @__PURE__ */ jsx66("span", { className: "sr-only", children: "Reply" })
          ] }) }),
          /* @__PURE__ */ jsx66(TooltipContent, { children: "Reply" })
        ] }),
        /* @__PURE__ */ jsxs44(Tooltip, { children: [
          /* @__PURE__ */ jsx66(TooltipTrigger, { asChild: !0, children: /* @__PURE__ */ jsxs44(Button, { variant: "ghost", size: "icon", disabled: !mail, children: [
            /* @__PURE__ */ jsx66(ReplyAll, { className: "h-4 w-4" }),
            /* @__PURE__ */ jsx66("span", { className: "sr-only", children: "Reply all" })
          ] }) }),
          /* @__PURE__ */ jsx66(TooltipContent, { children: "Reply all" })
        ] }),
        /* @__PURE__ */ jsxs44(Tooltip, { children: [
          /* @__PURE__ */ jsx66(TooltipTrigger, { asChild: !0, children: /* @__PURE__ */ jsxs44(Button, { variant: "ghost", size: "icon", disabled: !mail, children: [
            /* @__PURE__ */ jsx66(Forward, { className: "h-4 w-4" }),
            /* @__PURE__ */ jsx66("span", { className: "sr-only", children: "Forward" })
          ] }) }),
          /* @__PURE__ */ jsx66(TooltipContent, { children: "Forward" })
        ] })
      ] }),
      /* @__PURE__ */ jsx66(Separator, { orientation: "vertical", className: "mx-2 h-6" }),
      /* @__PURE__ */ jsxs44(DropdownMenu, { children: [
        /* @__PURE__ */ jsx66(DropdownMenuTrigger, { asChild: !0, children: /* @__PURE__ */ jsxs44(Button, { variant: "ghost", size: "icon", disabled: !mail, children: [
          /* @__PURE__ */ jsx66(MoreVertical, { className: "h-4 w-4" }),
          /* @__PURE__ */ jsx66("span", { className: "sr-only", children: "More" })
        ] }) }),
        /* @__PURE__ */ jsxs44(DropdownMenuContent, { align: "end", children: [
          /* @__PURE__ */ jsx66(DropdownMenuItem, { children: "Mark as unread" }),
          /* @__PURE__ */ jsx66(DropdownMenuItem, { children: "Star thread" }),
          /* @__PURE__ */ jsx66(DropdownMenuItem, { children: "Add label" }),
          /* @__PURE__ */ jsx66(DropdownMenuItem, { children: "Mute thread" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx66(Separator, {}),
    mail ? /* @__PURE__ */ jsxs44("div", { className: "flex flex-1 flex-col", children: [
      /* @__PURE__ */ jsxs44("div", { className: "flex items-start p-4", children: [
        /* @__PURE__ */ jsxs44("div", { className: "flex items-start gap-4 text-sm", children: [
          /* @__PURE__ */ jsxs44(Avatar, { children: [
            /* @__PURE__ */ jsx66(AvatarImage, { alt: mail.name }),
            /* @__PURE__ */ jsx66(AvatarFallback, { children: mail.name.split(" ").map((chunk) => chunk[0]).join("") })
          ] }),
          /* @__PURE__ */ jsxs44("div", { className: "grid gap-1", children: [
            /* @__PURE__ */ jsx66("div", { className: "font-semibold", children: mail.name }),
            /* @__PURE__ */ jsx66("div", { className: "line-clamp-1 text-xs", children: mail.subject }),
            /* @__PURE__ */ jsxs44("div", { className: "line-clamp-1 text-xs", children: [
              /* @__PURE__ */ jsx66("span", { className: "font-medium", children: "Reply-To:" }),
              " ",
              mail.email
            ] })
          ] })
        ] }),
        mail.date && /* @__PURE__ */ jsx66("div", { className: "ml-auto text-xs text-muted-foreground", children: format3(new Date(mail.date), "PPpp") })
      ] }),
      /* @__PURE__ */ jsx66(Separator, {}),
      /* @__PURE__ */ jsx66("div", { className: "flex-1 whitespace-pre-wrap p-4 text-sm", children: mail.text }),
      /* @__PURE__ */ jsx66(Separator, { className: "mt-auto" }),
      /* @__PURE__ */ jsx66("div", { className: "p-4", children: /* @__PURE__ */ jsx66("form", { children: /* @__PURE__ */ jsxs44("div", { className: "grid gap-4", children: [
        /* @__PURE__ */ jsx66(
          Textarea,
          {
            className: "p-4",
            placeholder: `Reply ${mail.name}...`
          }
        ),
        /* @__PURE__ */ jsxs44("div", { className: "flex items-center", children: [
          /* @__PURE__ */ jsxs44(
            Label,
            {
              htmlFor: "mute",
              className: "flex items-center gap-2 text-xs font-normal",
              children: [
                /* @__PURE__ */ jsx66(Switch, { id: "mute", "aria-label": "Mute thread" }),
                " Mute this thread"
              ]
            }
          ),
          /* @__PURE__ */ jsx66(Button, { size: "sm", className: "ml-auto", children: "Send" })
        ] })
      ] }) }) })
    ] }) : /* @__PURE__ */ jsx66("div", { className: "p-8 text-center text-muted-foreground", children: "No message selected" })
  ] });
}

// app/components/mail/mail-list.tsx
import { formatDistanceToNow } from "date-fns/formatDistanceToNow";

// app/components/mail/use-mail.ts
import { atom, useAtom } from "jotai";

// app/components/mail/data/data.tsx
import { jsx as jsx67, jsxs as jsxs45 } from "react/jsx-runtime";
var mails = [
  {
    id: "6c84fb90-12c4-11e1-840d-7b25c5ee775a",
    name: "William Smith",
    email: "williamsmith@example.com",
    subject: "Meeting Tomorrow",
    text: `Hi, let's have a meeting tomorrow to discuss the project. I've been reviewing the project details and have some ideas I'd like to share. It's crucial that we align on our next steps to ensure the project's success.

Please come prepared with any questions or insights you may have. Looking forward to our meeting!

Best regards, William`,
    date: "2023-10-22T09:00:00",
    read: !0,
    labels: ["meeting", "work", "important"]
  },
  {
    id: "110e8400-e29b-11d4-a716-446655440000",
    name: "Alice Smith",
    email: "alicesmith@example.com",
    subject: "Re: Project Update",
    text: `Thank you for the project update. It looks great! I've gone through the report, and the progress is impressive. The team has done a fantastic job, and I appreciate the hard work everyone has put in.

I have a few minor suggestions that I'll include in the attached document.

Let's discuss these during our next meeting. Keep up the excellent work!

Best regards, Alice`,
    date: "2023-10-22T10:30:00",
    read: !0,
    labels: ["work", "important"]
  },
  {
    id: "3e7c3f6d-bdf5-46ae-8d90-171300f27ae2",
    name: "Bob Johnson",
    email: "bobjohnson@example.com",
    subject: "Weekend Plans",
    text: `Any plans for the weekend? I was thinking of going hiking in the nearby mountains. It's been a while since we had some outdoor fun.

If you're interested, let me know, and we can plan the details. It'll be a great way to unwind and enjoy nature.

Looking forward to your response!

Best, Bob`,
    date: "2023-04-10T11:45:00",
    read: !0,
    labels: ["personal"]
  },
  {
    id: "61c35085-72d7-42b4-8d62-738f700d4b92",
    name: "Emily Davis",
    email: "emilydavis@example.com",
    subject: "Re: Question about Budget",
    text: `I have a question about the budget for the upcoming project. It seems like there's a discrepancy in the allocation of resources.

I've reviewed the budget report and identified a few areas where we might be able to optimize our spending without compromising the project's quality.

I've attached a detailed analysis for your reference. Let's discuss this further in our next meeting.

Thanks, Emily`,
    date: "2023-03-25T13:15:00",
    read: !1,
    labels: ["work", "budget"]
  },
  {
    id: "8f7b5db9-d935-4e42-8e05-1f1d0a3dfb97",
    name: "Michael Wilson",
    email: "michaelwilson@example.com",
    subject: "Important Announcement",
    text: `I have an important announcement to make during our team meeting. It pertains to a strategic shift in our approach to the upcoming product launch. We've received valuable feedback from our beta testers, and I believe it's time to make some adjustments to better meet our customers' needs.

This change is crucial to our success, and I look forward to discussing it with the team. Please be prepared to share your insights during the meeting.

Regards, Michael`,
    date: "2023-03-10T15:00:00",
    read: !1,
    labels: ["meeting", "work", "important"]
  },
  {
    id: "1f0f2c02-e299-40de-9b1d-86ef9e42126b",
    name: "Sarah Brown",
    email: "sarahbrown@example.com",
    subject: "Re: Feedback on Proposal",
    text: `Thank you for your feedback on the proposal. It looks great! I'm pleased to hear that you found it promising. The team worked diligently to address all the key points you raised, and I believe we now have a strong foundation for the project.

I've attached the revised proposal for your review.

Please let me know if you have any further comments or suggestions. Looking forward to your response.

Best regards, Sarah`,
    date: "2023-02-15T16:30:00",
    read: !0,
    labels: ["work"]
  },
  {
    id: "17c0a96d-4415-42b1-8b4f-764efab57f66",
    name: "David Lee",
    email: "davidlee@example.com",
    subject: "New Project Idea",
    text: `I have an exciting new project idea to discuss with you. It involves expanding our services to target a niche market that has shown considerable growth in recent months.

I've prepared a detailed proposal outlining the potential benefits and the strategy for execution.

This project has the potential to significantly impact our business positively. Let's set up a meeting to dive into the details and determine if it aligns with our current goals.

Best regards, David`,
    date: "2023-01-28T17:45:00",
    read: !1,
    labels: ["meeting", "work", "important"]
  },
  {
    id: "2f0130cb-39fc-44c4-bb3c-0a4337edaaab",
    name: "Olivia Wilson",
    email: "oliviawilson@example.com",
    subject: "Vacation Plans",
    text: `Let's plan our vacation for next month. What do you think? I've been thinking of visiting a tropical paradise, and I've put together some destination options.

I believe it's time for us to unwind and recharge. Please take a look at the options and let me know your preferences.

We can start making arrangements to ensure a smooth and enjoyable trip.

Excited to hear your thoughts! Olivia`,
    date: "2022-12-20T18:30:00",
    read: !0,
    labels: ["personal"]
  },
  {
    id: "de305d54-75b4-431b-adb2-eb6b9e546014",
    name: "James Martin",
    email: "jamesmartin@example.com",
    subject: "Re: Conference Registration",
    text: `I've completed the registration for the conference next month. The event promises to be a great networking opportunity, and I'm looking forward to attending the various sessions and connecting with industry experts.

I've also attached the conference schedule for your reference.

If there are any specific topics or sessions you'd like me to explore, please let me know. It's an exciting event, and I'll make the most of it.

Best regards, James`,
    date: "2022-11-30T19:15:00",
    read: !0,
    labels: ["work", "conference"]
  },
  {
    id: "7dd90c63-00f6-40f3-bd87-5060a24e8ee7",
    name: "Sophia White",
    email: "sophiawhite@example.com",
    subject: "Team Dinner",
    text: `Let's have a team dinner next week to celebrate our success. We've achieved some significant milestones, and it's time to acknowledge our hard work and dedication.

I've made reservations at a lovely restaurant, and I'm sure it'll be an enjoyable evening.

Please confirm your availability and any dietary preferences. Looking forward to a fun and memorable dinner with the team!

Best, Sophia`,
    date: "2022-11-05T20:30:00",
    read: !1,
    labels: ["meeting", "work"]
  },
  {
    id: "99a88f78-3eb4-4d87-87b7-7b15a49a0a05",
    name: "Daniel Johnson",
    email: "danieljohnson@example.com",
    subject: "Feedback Request",
    text: `I'd like your feedback on the latest project deliverables. We've made significant progress, and I value your input to ensure we're on the right track.

I've attached the deliverables for your review, and I'm particularly interested in any areas where you think we can further enhance the quality or efficiency.

Your feedback is invaluable, and I appreciate your time and expertise. Let's work together to make this project a success.

Regards, Daniel`,
    date: "2022-10-22T09:30:00",
    read: !1,
    labels: ["work"]
  },
  {
    id: "f47ac10b-58cc-4372-a567-0e02b2c3d479",
    name: "Ava Taylor",
    email: "avataylor@example.com",
    subject: "Re: Meeting Agenda",
    text: `Here's the agenda for our meeting next week. I've included all the topics we need to cover, as well as time allocations for each.

If you have any additional items to discuss or any specific points to address, please let me know, and we can integrate them into the agenda.

It's essential that our meeting is productive and addresses all relevant matters.

Looking forward to our meeting! Ava`,
    date: "2022-10-10T10:45:00",
    read: !0,
    labels: ["meeting", "work"]
  },
  {
    id: "c1a0ecb4-2540-49c5-86f8-21e5ce79e4e6",
    name: "William Anderson",
    email: "williamanderson@example.com",
    subject: "Product Launch Update",
    text: `The product launch is on track. I'll provide an update during our call. We've made substantial progress in the development and marketing of our new product.

I'm excited to share the latest updates with you during our upcoming call. It's crucial that we coordinate our efforts to ensure a successful launch. Please come prepared with any questions or insights you may have.

Let's make this product launch a resounding success!

Best regards, William`,
    date: "2022-09-20T12:00:00",
    read: !1,
    labels: ["meeting", "work", "important"]
  },
  {
    id: "ba54eefd-4097-4949-99f2-2a9ae4d1a836",
    name: "Mia Harris",
    email: "miaharris@example.com",
    subject: "Re: Travel Itinerary",
    text: `I've received the travel itinerary. It looks great! Thank you for your prompt assistance in arranging the details. I've reviewed the schedule and the accommodations, and everything seems to be in order. I'm looking forward to the trip, and I'm confident it'll be a smooth and enjoyable experience.

If there are any specific activities or attractions you recommend at our destination, please feel free to share your suggestions.

Excited for the trip! Mia`,
    date: "2022-09-10T13:15:00",
    read: !0,
    labels: ["personal", "travel"]
  },
  {
    id: "df09b6ed-28bd-4e0c-85a9-9320ec5179aa",
    name: "Ethan Clark",
    email: "ethanclark@example.com",
    subject: "Team Building Event",
    text: `Let's plan a team-building event for our department. Team cohesion and morale are vital to our success, and I believe a well-organized team-building event can be incredibly beneficial. I've done some research and have a few ideas for fun and engaging activities.

Please let me know your thoughts and availability. We want this event to be both enjoyable and productive.

Together, we'll strengthen our team and boost our performance.

Regards, Ethan`,
    date: "2022-08-25T15:30:00",
    read: !1,
    labels: ["meeting", "work"]
  },
  {
    id: "d67c1842-7f8b-4b4b-9be1-1b3b1ab4611d",
    name: "Chloe Hall",
    email: "chloehall@example.com",
    subject: "Re: Budget Approval",
    text: `The budget has been approved. We can proceed with the project. I'm delighted to inform you that our budget proposal has received the green light from the finance department. This is a significant milestone, and it means we can move forward with the project as planned.

I've attached the finalized budget for your reference. Let's ensure that we stay on track and deliver the project on time and within budget.

It's an exciting time for us! Chloe`,
    date: "2022-08-10T16:45:00",
    read: !0,
    labels: ["work", "budget"]
  },
  {
    id: "6c9a7f94-8329-4d70-95d3-51f68c186ae1",
    name: "Samuel Turner",
    email: "samuelturner@example.com",
    subject: "Weekend Hike",
    text: `Who's up for a weekend hike in the mountains? I've been craving some outdoor adventure, and a hike in the mountains sounds like the perfect escape. If you're up for the challenge, we can explore some scenic trails and enjoy the beauty of nature.

I've done some research and have a few routes in mind.

Let me know if you're interested, and we can plan the details.

It's sure to be a memorable experience! Samuel`,
    date: "2022-07-28T17:30:00",
    read: !1,
    labels: ["personal"]
  }
], accounts = [
  {
    label: "Alicia Koch",
    email: "alicia@example.com",
    icon: /* @__PURE__ */ jsxs45("svg", { role: "img", viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", children: [
      /* @__PURE__ */ jsx67("title", { children: "Vercel" }),
      /* @__PURE__ */ jsx67("path", { d: "M24 22.525H0l12-21.05 12 21.05z", fill: "currentColor" })
    ] })
  },
  {
    label: "Alicia Koch",
    email: "alicia@gmail.com",
    icon: /* @__PURE__ */ jsxs45("svg", { role: "img", viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", children: [
      /* @__PURE__ */ jsx67("title", { children: "Gmail" }),
      /* @__PURE__ */ jsx67(
        "path",
        {
          d: "M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z",
          fill: "currentColor"
        }
      )
    ] })
  },
  {
    label: "Alicia Koch",
    email: "alicia@me.com",
    icon: /* @__PURE__ */ jsxs45("svg", { role: "img", viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", children: [
      /* @__PURE__ */ jsx67("title", { children: "iCloud" }),
      /* @__PURE__ */ jsx67(
        "path",
        {
          d: "M13.762 4.29a6.51 6.51 0 0 0-5.669 3.332 3.571 3.571 0 0 0-1.558-.36 3.571 3.571 0 0 0-3.516 3A4.918 4.918 0 0 0 0 14.796a4.918 4.918 0 0 0 4.92 4.914 4.93 4.93 0 0 0 .617-.045h14.42c2.305-.272 4.041-2.258 4.043-4.589v-.009a4.594 4.594 0 0 0-3.727-4.508 6.51 6.51 0 0 0-6.511-6.27z",
          fill: "currentColor"
        }
      )
    ] })
  }
];

// app/components/mail/use-mail.ts
var configAtom = atom({
  selected: mails[0].id
});
function useMail() {
  return useAtom(configAtom);
}

// app/components/mail/mail-list.tsx
import { jsx as jsx68, jsxs as jsxs46 } from "react/jsx-runtime";
function MailList({ items: items2 }) {
  let [mail, setMail] = useMail();
  return /* @__PURE__ */ jsx68(ScrollArea, { className: "h-screen", children: /* @__PURE__ */ jsx68("div", { className: "flex flex-col gap-2 p-4 pt-0", children: items2.map((item) => /* @__PURE__ */ jsxs46(
    "button",
    {
      className: cn(
        "flex flex-col items-start gap-2 rounded-lg border p-3 text-left text-sm transition-all hover:bg-accent",
        mail.selected === item.id && "bg-muted"
      ),
      onClick: () => setMail({
        ...mail,
        selected: item.id
      }),
      children: [
        /* @__PURE__ */ jsxs46("div", { className: "flex w-full flex-col gap-1", children: [
          /* @__PURE__ */ jsxs46("div", { className: "flex items-center", children: [
            /* @__PURE__ */ jsxs46("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx68("div", { className: "font-semibold", children: item.name }),
              !item.read && /* @__PURE__ */ jsx68("span", { className: "flex h-2 w-2 rounded-full bg-blue-600" })
            ] }),
            /* @__PURE__ */ jsx68(
              "div",
              {
                className: cn(
                  "ml-auto text-xs",
                  mail.selected === item.id ? "text-foreground" : "text-muted-foreground"
                ),
                children: formatDistanceToNow(new Date(item.date), {
                  addSuffix: !0
                })
              }
            )
          ] }),
          /* @__PURE__ */ jsx68("div", { className: "text-xs font-medium", children: item.subject })
        ] }),
        /* @__PURE__ */ jsx68("div", { className: "line-clamp-2 text-xs text-muted-foreground", children: item.text.substring(0, 300) }),
        item.labels.length ? /* @__PURE__ */ jsx68("div", { className: "flex items-center gap-2", children: item.labels.map((label) => /* @__PURE__ */ jsx68(Badge, { variant: getBadgeVariantFromLabel(label), children: label }, label)) }) : null
      ]
    },
    item.id
  )) }) });
}
function getBadgeVariantFromLabel(label) {
  return ["work"].includes(label.toLowerCase()) ? "default" : ["personal"].includes(label.toLowerCase()) ? "outline" : "secondary";
}

// app/components/mail/nav.tsx
import { jsx as jsx69, jsxs as jsxs47 } from "react/jsx-runtime";
function Nav({ links: links2, isCollapsed }) {
  return /* @__PURE__ */ jsx69(
    "div",
    {
      "data-collapsed": isCollapsed,
      className: "group flex flex-col gap-4 py-2 data-[collapsed=true]:py-2",
      children: /* @__PURE__ */ jsx69("nav", { className: "grid gap-1 px-2 group-[[data-collapsed=true]]:justify-center group-[[data-collapsed=true]]:px-2", children: links2.map(
        (link, index) => isCollapsed ? /* @__PURE__ */ jsxs47(Tooltip, { delayDuration: 0, children: [
          /* @__PURE__ */ jsx69(TooltipTrigger, { asChild: !0, children: /* @__PURE__ */ jsxs47(
            "a",
            {
              href: "#",
              className: cn(
                buttonVariants({ variant: link.variant, size: "icon" }),
                "h-9 w-9",
                link.variant === "default" && "dark:bg-muted dark:text-muted-foreground dark:hover:bg-muted dark:hover:text-white"
              ),
              children: [
                /* @__PURE__ */ jsx69(link.icon, { className: "h-4 w-4" }),
                /* @__PURE__ */ jsx69("span", { className: "sr-only", children: link.title })
              ]
            }
          ) }),
          /* @__PURE__ */ jsxs47(TooltipContent, { side: "right", className: "flex items-center gap-4", children: [
            link.title,
            link.label && /* @__PURE__ */ jsx69("span", { className: "ml-auto text-muted-foreground", children: link.label })
          ] })
        ] }, index) : /* @__PURE__ */ jsxs47(
          "a",
          {
            href: "#",
            className: cn(
              buttonVariants({ variant: link.variant, size: "sm" }),
              link.variant === "default" && "dark:bg-muted dark:text-white dark:hover:bg-muted dark:hover:text-white",
              "justify-start"
            ),
            children: [
              /* @__PURE__ */ jsx69(link.icon, { className: "mr-2 h-4 w-4" }),
              link.title,
              link.label && /* @__PURE__ */ jsx69(
                "span",
                {
                  className: cn(
                    "ml-auto",
                    link.variant === "default" && "text-background dark:text-white"
                  ),
                  children: link.label
                }
              )
            ]
          },
          index
        )
      ) })
    }
  );
}

// app/components/ui/resizable.tsx
import { GripVertical } from "lucide-react";
import * as ResizablePrimitive from "react-resizable-panels";
import { jsx as jsx70 } from "react/jsx-runtime";
var ResizablePanelGroup = ({
  className,
  ...props
}) => /* @__PURE__ */ jsx70(
  ResizablePrimitive.PanelGroup,
  {
    className: cn(
      "flex h-full w-full data-[panel-group-direction=vertical]:flex-col",
      className
    ),
    ...props
  }
), ResizablePanel = ResizablePrimitive.Panel, ResizableHandle = ({
  withHandle,
  className,
  ...props
}) => /* @__PURE__ */ jsx70(
  ResizablePrimitive.PanelResizeHandle,
  {
    className: cn(
      "relative flex w-px items-center justify-center bg-border after:absolute after:inset-y-0 after:left-1/2 after:w-1 after:-translate-x-1/2 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-1 data-[panel-group-direction=vertical]:h-px data-[panel-group-direction=vertical]:w-full data-[panel-group-direction=vertical]:after:left-0 data-[panel-group-direction=vertical]:after:h-1 data-[panel-group-direction=vertical]:after:w-full data-[panel-group-direction=vertical]:after:-translate-y-1/2 data-[panel-group-direction=vertical]:after:translate-x-0 [&[data-panel-group-direction=vertical]>div]:rotate-90",
      className
    ),
    ...props,
    children: withHandle && /* @__PURE__ */ jsx70("div", { className: "z-10 flex h-4 w-3 items-center justify-center rounded-sm border bg-border", children: /* @__PURE__ */ jsx70(GripVertical, { className: "h-2.5 w-2.5" }) })
  }
);

// app/components/mail/mail.tsx
import { jsx as jsx71, jsxs as jsxs48 } from "react/jsx-runtime";
function Mail2({
  accounts: accounts2,
  mails: mails2,
  defaultLayout = [265, 440, 655],
  defaultCollapsed = !1,
  navCollapsedSize
}) {
  let [isCollapsed, setIsCollapsed] = React28.useState(defaultCollapsed), [mail] = useMail();
  return /* @__PURE__ */ jsx71(TooltipProvider, { delayDuration: 0, children: /* @__PURE__ */ jsxs48(
    ResizablePanelGroup,
    {
      direction: "horizontal",
      onLayout: (sizes) => {
        document.cookie = `react-resizable-panels:layout=${JSON.stringify(
          sizes
        )}`;
      },
      className: "h-full max-h-[800px] items-stretch",
      children: [
        /* @__PURE__ */ jsxs48(
          ResizablePanel,
          {
            defaultSize: defaultLayout[0],
            collapsedSize: navCollapsedSize,
            collapsible: !0,
            minSize: 15,
            maxSize: 20,
            className: cn(
              isCollapsed && "min-w-[50px] transition-all duration-300 ease-in-out"
            ),
            children: [
              /* @__PURE__ */ jsx71(
                "div",
                {
                  className: cn(
                    "flex h-[52px] items-center justify-center",
                    isCollapsed ? "h-[52px]" : "px-2"
                  ),
                  children: /* @__PURE__ */ jsx71(AccountSwitcher, { isCollapsed, accounts: accounts2 })
                }
              ),
              /* @__PURE__ */ jsx71(Separator, {}),
              /* @__PURE__ */ jsx71(
                Nav,
                {
                  isCollapsed,
                  links: [
                    {
                      title: "Inbox",
                      label: "128",
                      icon: Inbox,
                      variant: "default"
                    },
                    {
                      title: "Drafts",
                      label: "9",
                      icon: File,
                      variant: "ghost"
                    },
                    {
                      title: "Sent",
                      label: "",
                      icon: Send,
                      variant: "ghost"
                    },
                    {
                      title: "Junk",
                      label: "23",
                      icon: ArchiveX2,
                      variant: "ghost"
                    },
                    {
                      title: "Trash",
                      label: "",
                      icon: Trash22,
                      variant: "ghost"
                    },
                    {
                      title: "Archive",
                      label: "",
                      icon: Archive2,
                      variant: "ghost"
                    }
                  ]
                }
              ),
              /* @__PURE__ */ jsx71(Separator, {}),
              /* @__PURE__ */ jsx71(
                Nav,
                {
                  isCollapsed,
                  links: [
                    {
                      title: "Social",
                      label: "972",
                      icon: Users2,
                      variant: "ghost"
                    },
                    {
                      title: "Updates",
                      label: "342",
                      icon: AlertCircle,
                      variant: "ghost"
                    },
                    {
                      title: "Forums",
                      label: "128",
                      icon: MessagesSquare,
                      variant: "ghost"
                    },
                    {
                      title: "Shopping",
                      label: "8",
                      icon: ShoppingCart,
                      variant: "ghost"
                    },
                    {
                      title: "Promotions",
                      label: "21",
                      icon: Archive2,
                      variant: "ghost"
                    }
                  ]
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ jsx71(ResizableHandle, { withHandle: !0 }),
        /* @__PURE__ */ jsx71(ResizablePanel, { defaultSize: defaultLayout[1], minSize: 30, children: /* @__PURE__ */ jsxs48(Tabs, { defaultValue: "all", children: [
          /* @__PURE__ */ jsxs48("div", { className: "flex items-center px-4 py-2", children: [
            /* @__PURE__ */ jsx71("h1", { className: "text-xl font-bold", children: "Inbox" }),
            /* @__PURE__ */ jsxs48(TabsList, { className: "ml-auto", children: [
              /* @__PURE__ */ jsx71(
                TabsTrigger,
                {
                  value: "all",
                  className: "text-zinc-600 dark:text-zinc-200",
                  children: "All mail"
                }
              ),
              /* @__PURE__ */ jsx71(
                TabsTrigger,
                {
                  value: "unread",
                  className: "text-zinc-600 dark:text-zinc-200",
                  children: "Unread"
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsx71(Separator, {}),
          /* @__PURE__ */ jsx71("div", { className: "bg-background/95 p-4 backdrop-blur supports-[backdrop-filter]:bg-background/60", children: /* @__PURE__ */ jsx71("form", { children: /* @__PURE__ */ jsxs48("div", { className: "relative", children: [
            /* @__PURE__ */ jsx71(Search3, { className: "absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" }),
            /* @__PURE__ */ jsx71(Input, { placeholder: "Search", className: "pl-8" })
          ] }) }) }),
          /* @__PURE__ */ jsx71(TabsContent, { value: "all", className: "m-0", children: /* @__PURE__ */ jsx71(MailList, { items: mails2 }) }),
          /* @__PURE__ */ jsx71(TabsContent, { value: "unread", className: "m-0", children: /* @__PURE__ */ jsx71(MailList, { items: mails2.filter((item) => !item.read) }) })
        ] }) }),
        /* @__PURE__ */ jsx71(ResizableHandle, { withHandle: !0 }),
        /* @__PURE__ */ jsx71(ResizablePanel, { defaultSize: defaultLayout[2], children: /* @__PURE__ */ jsx71(
          MailDisplay,
          {
            mail: mails2.find((item) => item.id === mail.selected) ?? null
          }
        ) })
      ]
    }
  ) });
}

// app/routes/mail.tsx
import { jsx as jsx72 } from "react/jsx-runtime";
function Mail3() {
  return /* @__PURE__ */ jsx72("div", { className: " flex-col md:flex", children: /* @__PURE__ */ jsx72(
    Mail2,
    {
      accounts,
      mails,
      defaultLayout: [20, 40, 40],
      defaultCollapsed: !1,
      navCollapsedSize: 2.32
    }
  ) });
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-EKNTFF3F.js", imports: ["/build/_shared/chunk-5FAYY32G.js", "/build/_shared/chunk-UEGOBHZ5.js", "/build/_shared/chunk-C46C5URB.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-DJGGM46V.js", imports: ["/build/_shared/chunk-4ROZ6T4S.js", "/build/_shared/chunk-MWTMT4VF.js", "/build/_shared/chunk-EREOA2DW.js", "/build/_shared/chunk-VR2YOW42.js", "/build/_shared/chunk-74C3M246.js", "/build/_shared/chunk-CGGUTKH3.js", "/build/_shared/chunk-JF66XJWX.js", "/build/_shared/chunk-ZWSXUEUM.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/_index": { id: "routes/_index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_index-QM7QUNJP.js", imports: void 0, hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/dashboard": { id: "routes/dashboard", parentId: "root", path: "dashboard", index: void 0, caseSensitive: void 0, module: "/build/routes/dashboard-PM4SYXTS.js", imports: ["/build/_shared/chunk-F5P6KJLR.js", "/build/_shared/chunk-NDWGVFNI.js", "/build/_shared/chunk-UC2K6RWA.js", "/build/_shared/chunk-5DKN5SR5.js", "/build/_shared/chunk-ZR36JDTU.js", "/build/_shared/chunk-ULJO7JFN.js", "/build/_shared/chunk-G7HKFOW5.js", "/build/_shared/chunk-RGSKDG4M.js", "/build/_shared/chunk-QUK75A2Q.js", "/build/_shared/chunk-7DMFJOR6.js", "/build/_shared/chunk-7PGZUH7X.js", "/build/_shared/chunk-3CMIQ4EV.js", "/build/_shared/chunk-XPV7H5DZ.js", "/build/_shared/chunk-OVJ52WF4.js", "/build/_shared/chunk-6TFJZL66.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/forms": { id: "routes/forms", parentId: "root", path: "forms", index: void 0, caseSensitive: void 0, module: "/build/routes/forms-GJAJZSRN.js", imports: ["/build/_shared/chunk-W72IG37K.js", "/build/_shared/chunk-6TFJZL66.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/forms.account": { id: "routes/forms.account", parentId: "routes/forms", path: "account", index: void 0, caseSensitive: void 0, module: "/build/routes/forms.account-WZNTM6YD.js", imports: ["/build/_shared/chunk-DHPNDY6R.js", "/build/_shared/chunk-DIR4EQ5R.js", "/build/_shared/chunk-5DKN5SR5.js", "/build/_shared/chunk-ZR36JDTU.js", "/build/_shared/chunk-ULJO7JFN.js", "/build/_shared/chunk-G7HKFOW5.js", "/build/_shared/chunk-RGSKDG4M.js", "/build/_shared/chunk-VR2YOW42.js", "/build/_shared/chunk-7PGZUH7X.js", "/build/_shared/chunk-CGGUTKH3.js", "/build/_shared/chunk-XPV7H5DZ.js", "/build/_shared/chunk-OVJ52WF4.js", "/build/_shared/chunk-JF66XJWX.js", "/build/_shared/chunk-ZWSXUEUM.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/forms.appearance": { id: "routes/forms.appearance", parentId: "routes/forms", path: "appearance", index: void 0, caseSensitive: void 0, module: "/build/routes/forms.appearance-HVE6S5XN.js", imports: ["/build/_shared/chunk-DHPNDY6R.js", "/build/_shared/chunk-DIR4EQ5R.js", "/build/_shared/chunk-EREOA2DW.js", "/build/_shared/chunk-RGSKDG4M.js", "/build/_shared/chunk-VR2YOW42.js", "/build/_shared/chunk-74C3M246.js", "/build/_shared/chunk-CGGUTKH3.js", "/build/_shared/chunk-3CMIQ4EV.js", "/build/_shared/chunk-XPV7H5DZ.js", "/build/_shared/chunk-OVJ52WF4.js", "/build/_shared/chunk-JF66XJWX.js", "/build/_shared/chunk-ZWSXUEUM.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/forms.display": { id: "routes/forms.display", parentId: "routes/forms", path: "display", index: void 0, caseSensitive: void 0, module: "/build/routes/forms.display-HJ6GCATO.js", imports: ["/build/_shared/chunk-2BNOX6MI.js", "/build/_shared/chunk-DHPNDY6R.js", "/build/_shared/chunk-DIR4EQ5R.js", "/build/_shared/chunk-VR2YOW42.js", "/build/_shared/chunk-3CMIQ4EV.js", "/build/_shared/chunk-XPV7H5DZ.js", "/build/_shared/chunk-OVJ52WF4.js", "/build/_shared/chunk-JF66XJWX.js", "/build/_shared/chunk-ZWSXUEUM.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/forms.notifications": { id: "routes/forms.notifications", parentId: "routes/forms", path: "notifications", index: void 0, caseSensitive: void 0, module: "/build/routes/forms.notifications-SLBOI227.js", imports: ["/build/_shared/chunk-NEIYDDBN.js", "/build/_shared/chunk-5P6L72YN.js", "/build/_shared/chunk-DHPNDY6R.js", "/build/_shared/chunk-DIR4EQ5R.js", "/build/_shared/chunk-QUK75A2Q.js", "/build/_shared/chunk-7DMFJOR6.js", "/build/_shared/chunk-74C3M246.js", "/build/_shared/chunk-7PGZUH7X.js", "/build/_shared/chunk-CGGUTKH3.js", "/build/_shared/chunk-3CMIQ4EV.js", "/build/_shared/chunk-XPV7H5DZ.js", "/build/_shared/chunk-OVJ52WF4.js", "/build/_shared/chunk-JF66XJWX.js", "/build/_shared/chunk-ZWSXUEUM.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/forms.profile": { id: "routes/forms.profile", parentId: "routes/forms", path: "profile", index: void 0, caseSensitive: void 0, module: "/build/routes/forms.profile-TQ2UAAYX.js", imports: ["/build/_shared/chunk-NEIYDDBN.js", "/build/_shared/chunk-5P6L72YN.js", "/build/_shared/chunk-DHPNDY6R.js", "/build/_shared/chunk-DIR4EQ5R.js", "/build/_shared/chunk-QUK75A2Q.js", "/build/_shared/chunk-7DMFJOR6.js", "/build/_shared/chunk-74C3M246.js", "/build/_shared/chunk-7PGZUH7X.js", "/build/_shared/chunk-CGGUTKH3.js", "/build/_shared/chunk-3CMIQ4EV.js", "/build/_shared/chunk-XPV7H5DZ.js", "/build/_shared/chunk-OVJ52WF4.js", "/build/_shared/chunk-JF66XJWX.js", "/build/_shared/chunk-ZWSXUEUM.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/mail": { id: "routes/mail", parentId: "root", path: "mail", index: void 0, caseSensitive: void 0, module: "/build/routes/mail-2PR2EXGR.js", imports: ["/build/_shared/chunk-WSR6GMUN.js", "/build/_shared/chunk-FPLSRX7K.js", "/build/_shared/chunk-5P6L72YN.js", "/build/_shared/chunk-W72IG37K.js", "/build/_shared/chunk-NDWGVFNI.js", "/build/_shared/chunk-UC2K6RWA.js", "/build/_shared/chunk-ULJO7JFN.js", "/build/_shared/chunk-G7HKFOW5.js", "/build/_shared/chunk-QUK75A2Q.js", "/build/_shared/chunk-7DMFJOR6.js", "/build/_shared/chunk-7PGZUH7X.js", "/build/_shared/chunk-3CMIQ4EV.js", "/build/_shared/chunk-XPV7H5DZ.js", "/build/_shared/chunk-OVJ52WF4.js", "/build/_shared/chunk-6TFJZL66.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/music": { id: "routes/music", parentId: "root", path: "music", index: void 0, caseSensitive: void 0, module: "/build/routes/music-HR2YOYDU.js", imports: ["/build/_shared/chunk-WSR6GMUN.js", "/build/_shared/chunk-W72IG37K.js", "/build/_shared/chunk-UC2K6RWA.js", "/build/_shared/chunk-ZR36JDTU.js", "/build/_shared/chunk-RGSKDG4M.js", "/build/_shared/chunk-7DMFJOR6.js", "/build/_shared/chunk-7PGZUH7X.js", "/build/_shared/chunk-XPV7H5DZ.js", "/build/_shared/chunk-OVJ52WF4.js", "/build/_shared/chunk-6TFJZL66.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/tasks": { id: "routes/tasks", parentId: "root", path: "tasks", index: void 0, caseSensitive: void 0, module: "/build/routes/tasks-7I42UWH2.js", imports: ["/build/_shared/chunk-FPLSRX7K.js", "/build/_shared/chunk-2BNOX6MI.js", "/build/_shared/chunk-DIR4EQ5R.js", "/build/_shared/chunk-W72IG37K.js", "/build/_shared/chunk-F5P6KJLR.js", "/build/_shared/chunk-NDWGVFNI.js", "/build/_shared/chunk-UC2K6RWA.js", "/build/_shared/chunk-5DKN5SR5.js", "/build/_shared/chunk-ZR36JDTU.js", "/build/_shared/chunk-G7HKFOW5.js", "/build/_shared/chunk-RGSKDG4M.js", "/build/_shared/chunk-QUK75A2Q.js", "/build/_shared/chunk-7DMFJOR6.js", "/build/_shared/chunk-7PGZUH7X.js", "/build/_shared/chunk-3CMIQ4EV.js", "/build/_shared/chunk-OVJ52WF4.js", "/build/_shared/chunk-6TFJZL66.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 } }, version: "dbd12469", hmr: void 0, url: "/build/manifest-DBD12469.js" };

// server-entry-module:@remix-run/dev/server-build
var mode = "production", assetsBuildDirectory = "public/build", future = { v3_fetcherPersist: !1, v3_relativeSplatPath: !1 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/forms.notifications": {
    id: "routes/forms.notifications",
    parentId: "routes/forms",
    path: "notifications",
    index: void 0,
    caseSensitive: void 0,
    module: forms_notifications_exports
  },
  "routes/forms.appearance": {
    id: "routes/forms.appearance",
    parentId: "routes/forms",
    path: "appearance",
    index: void 0,
    caseSensitive: void 0,
    module: forms_appearance_exports
  },
  "routes/forms.account": {
    id: "routes/forms.account",
    parentId: "routes/forms",
    path: "account",
    index: void 0,
    caseSensitive: void 0,
    module: forms_account_exports
  },
  "routes/forms.display": {
    id: "routes/forms.display",
    parentId: "routes/forms",
    path: "display",
    index: void 0,
    caseSensitive: void 0,
    module: forms_display_exports
  },
  "routes/forms.profile": {
    id: "routes/forms.profile",
    parentId: "routes/forms",
    path: "profile",
    index: void 0,
    caseSensitive: void 0,
    module: forms_profile_exports
  },
  "routes/dashboard": {
    id: "routes/dashboard",
    parentId: "root",
    path: "dashboard",
    index: void 0,
    caseSensitive: void 0,
    module: dashboard_exports
  },
  "routes/_index": {
    id: "routes/_index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: index_exports
  },
  "routes/forms": {
    id: "routes/forms",
    parentId: "root",
    path: "forms",
    index: void 0,
    caseSensitive: void 0,
    module: forms_exports
  },
  "routes/music": {
    id: "routes/music",
    parentId: "root",
    path: "music",
    index: void 0,
    caseSensitive: void 0,
    module: music_exports
  },
  "routes/tasks": {
    id: "routes/tasks",
    parentId: "root",
    path: "tasks",
    index: void 0,
    caseSensitive: void 0,
    module: tasks_exports
  },
  "routes/mail": {
    id: "routes/mail",
    parentId: "root",
    path: "mail",
    index: void 0,
    caseSensitive: void 0,
    module: mail_exports
  }
};
export {
  assets_manifest_default as assets,
  assetsBuildDirectory,
  entry,
  future,
  mode,
  publicPath,
  routes
};
