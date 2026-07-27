import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-wiki');
}

export default function XanteriaWikiKeywordPage() {
  return <StaticKeywordPage slug="xanteria-wiki" />;
}
