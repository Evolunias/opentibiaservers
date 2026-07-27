import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-wiki');
}

export default function ZuneraOtWikiKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-wiki" />;
}
