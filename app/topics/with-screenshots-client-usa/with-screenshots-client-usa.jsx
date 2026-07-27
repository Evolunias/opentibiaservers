import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-client-usa');
}

export default function WithScreenshotsClientUsaKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-client-usa" />;
}
