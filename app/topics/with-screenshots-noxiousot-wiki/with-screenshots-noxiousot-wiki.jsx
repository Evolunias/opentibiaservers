import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-noxiousot-wiki');
}

export default function WithScreenshotsNoxiousotWikiKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-noxiousot-wiki" />;
}
