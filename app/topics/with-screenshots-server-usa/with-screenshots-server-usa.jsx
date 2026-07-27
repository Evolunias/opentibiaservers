import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-server-usa');
}

export default function WithScreenshotsServerUsaKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-server-usa" />;
}
