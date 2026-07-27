import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-client-argentina');
}

export default function WithScreenshotsClientArgentinaKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-client-argentina" />;
}
