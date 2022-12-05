import SVG from 'react-inlinesvg'

export default function ServiceCart({ svg, title, children }) {
  return (
    <div className="lg:col-4 mt-5 lg:mt-0 text-center">
      <SVG src={`./SVG/${svg}`} className="mx-auto fill-current w-14 h-14" />
      <h2 className="mt-5 text-xl">{title}</h2>
      <p className="mt-5 text-gray-400">{children}</p>
    </div>
  )
}
