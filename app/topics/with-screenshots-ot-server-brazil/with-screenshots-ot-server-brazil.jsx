import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-ot-server-brazil');
}

export default function WithScreenshotsOtServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-ot-server-brazil" />;
}
