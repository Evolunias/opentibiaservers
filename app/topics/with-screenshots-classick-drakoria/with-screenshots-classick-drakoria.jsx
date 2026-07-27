import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-classick-drakoria');
}

export default function WithScreenshotsClassickDrakoriaKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-classick-drakoria" />;
}
