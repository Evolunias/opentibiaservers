import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-unline-server');
}

export default function WithScreenshotsUnlineServerKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-unline-server" />;
}
