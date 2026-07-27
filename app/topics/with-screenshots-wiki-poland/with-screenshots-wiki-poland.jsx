import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-wiki-poland');
}

export default function WithScreenshotsWikiPolandKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-wiki-poland" />;
}
