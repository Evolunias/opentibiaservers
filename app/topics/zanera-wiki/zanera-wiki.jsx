import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zanera-wiki');
}

export default function ZaneraWikiKeywordPage() {
  return <StaticKeywordPage slug="zanera-wiki" />;
}
