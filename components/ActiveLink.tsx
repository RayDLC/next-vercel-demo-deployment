import Link from "next/link"
import { useRouter } from "next/router"
import { CSSProperties, FC } from "react";

const style: CSSProperties = {
    color: 'white',
    textDecoration: 'underline'
}

interface Props {
    text: string;
    url: string;
}

export const ActiveLink: FC<Props> = ({ text, url }) => {

    const { asPath } = useRouter();

    return (
        <Link href={ url } style={ asPath === url ? style : undefined }>{ text }</Link>
    )
}
 export default ActiveLink