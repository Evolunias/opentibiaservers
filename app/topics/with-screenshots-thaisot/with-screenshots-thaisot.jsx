import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-thaisot');
}

export default function WithScreenshotsThaisotKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-thaisot" />;
}
