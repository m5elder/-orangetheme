import { c as create_ssr_component, d as add_attribute, e as escape } from "./ssr.js";
const Button = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let variantClasses;
  let sizeClasses;
  let widthClass;
  let animationClass;
  let { variant = "primary" } = $$props;
  let { size = "md" } = $$props;
  let { type = "button" } = $$props;
  let { disabled = false } = $$props;
  let { fullWidth = false } = $$props;
  let { href = null } = $$props;
  let { target = "_self" } = $$props;
  let { rel = "" } = $$props;
  let { animate = true } = $$props;
  if ($$props.variant === void 0 && $$bindings.variant && variant !== void 0) $$bindings.variant(variant);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0) $$bindings.size(size);
  if ($$props.type === void 0 && $$bindings.type && type !== void 0) $$bindings.type(type);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0) $$bindings.disabled(disabled);
  if ($$props.fullWidth === void 0 && $$bindings.fullWidth && fullWidth !== void 0) $$bindings.fullWidth(fullWidth);
  if ($$props.href === void 0 && $$bindings.href && href !== void 0) $$bindings.href(href);
  if ($$props.target === void 0 && $$bindings.target && target !== void 0) $$bindings.target(target);
  if ($$props.rel === void 0 && $$bindings.rel && rel !== void 0) $$bindings.rel(rel);
  if ($$props.animate === void 0 && $$bindings.animate && animate !== void 0) $$bindings.animate(animate);
  variantClasses = {
    primary: "bg-primary-600 text-white hover:bg-primary-700 focus:ring-primary-500",
    secondary: "bg-white text-primary-700 border border-primary-200 hover:bg-primary-50 focus:ring-primary-500",
    accent: "bg-accent-500 text-white hover:bg-accent-600 focus:ring-accent-500",
    outline: "bg-transparent text-secondary-700 border border-secondary-300 hover:bg-secondary-50 hover:text-secondary-800 focus:ring-secondary-500",
    text: "bg-transparent text-primary-600 hover:text-primary-700 focus:ring-primary-500 p-0"
  }[variant];
  sizeClasses = {
    sm: variant === "text" ? "text-sm" : "py-2 px-4 text-sm",
    md: variant === "text" ? "text-base" : "py-3 px-6",
    lg: variant === "text" ? "text-lg" : "py-4 px-8 text-lg"
  }[size];
  widthClass = fullWidth ? "w-full" : "";
  animationClass = animate ? "transition-all duration-200" : "";
  return `${href ? `<a${add_attribute("href", href, 0)}${add_attribute("target", target, 0)}${add_attribute("rel", rel, 0)} class="${[
    "inline-flex items-center justify-center rounded-xl font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 " + escape(variantClasses, true) + " " + escape(sizeClasses, true) + " " + escape(widthClass, true) + " " + escape(animationClass, true) + " " + escape(disabled ? "opacity-50 cursor-not-allowed" : "", true),
    disabled ? "pointer-events-none" : ""
  ].join(" ").trim()}">${slots.default ? slots.default({}) : ``}</a>` : `<button${add_attribute("type", type, 0)} ${disabled ? "disabled" : ""} class="${"inline-flex items-center justify-center rounded-xl font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 " + escape(variantClasses, true) + " " + escape(sizeClasses, true) + " " + escape(widthClass, true) + " " + escape(animationClass, true) + " " + escape(disabled ? "opacity-50 cursor-not-allowed" : "", true)}">${slots.default ? slots.default({}) : ``}</button>`}`;
});
export {
  Button as B
};
