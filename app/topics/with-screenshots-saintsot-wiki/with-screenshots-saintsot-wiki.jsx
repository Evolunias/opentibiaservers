import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-saintsot-wiki');
}

export default function WithScreenshotsSaintsotWikiKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-saintsot-wiki" />;
}
