import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-zunera-ot-wiki');
}

export default function WithScreenshotsZuneraOtWikiKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-zunera-ot-wiki" />;
}
