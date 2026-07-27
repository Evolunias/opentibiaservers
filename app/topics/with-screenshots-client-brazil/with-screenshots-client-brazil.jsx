import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-client-brazil');
}

export default function WithScreenshotsClientBrazilKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-client-brazil" />;
}
