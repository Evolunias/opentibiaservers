import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-carlinot');
}

export default function WithScreenshotsCarlinotKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-carlinot" />;
}
