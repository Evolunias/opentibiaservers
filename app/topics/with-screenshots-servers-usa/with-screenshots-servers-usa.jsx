import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-servers-usa');
}

export default function WithScreenshotsServersUsaKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-servers-usa" />;
}
