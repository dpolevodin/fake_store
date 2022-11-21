interface errorProps {
    error: string
}

export const Error = ({error}: errorProps) =>
<div className="loader">{error}</div>