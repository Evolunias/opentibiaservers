import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-imperianic-server');
}

export default function WithScreenshotsImperianicServerKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-imperianic-server" />;
}
