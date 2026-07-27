import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xantera-wiki');
}

export default function XanteraWikiKeywordPage() {
  return <StaticKeywordPage slug="xantera-wiki" />;
}
