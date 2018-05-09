import Link from 'next/link';

// Holds serverRuntimeConfig and publicRuntimeConfig from next.config.js, nothing else
import getConfig from 'next/config';
const {serverRuntimeConfig, publicRuntimeConfig} = getConfig();

export default props =>
  <article>
    <h2>{props.fields.Name}</h2>
    <p>{props.fields.Notes}</p>
    {/* render the URL as /post/:id */}
    <Link href={{ pathname: `${publicRuntimeConfig.ASSET_PATH}/post`, query: { id: props.id } }} as={`${publicRuntimeConfig.ASSET_PATH}/post/${props.id}`}>
      <a>Read more...</a>
    </Link>
  </article>