import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-unline-client');
}

export default function WithScreenshotsUnlineClientKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-unline-client" />;
}
