import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-imperianic-client');
}

export default function WithScreenshotsImperianicClientKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-imperianic-client" />;
}
