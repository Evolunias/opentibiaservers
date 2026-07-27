import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-classicus');
}

export default function WithScreenshotsClassicusKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-classicus" />;
}
