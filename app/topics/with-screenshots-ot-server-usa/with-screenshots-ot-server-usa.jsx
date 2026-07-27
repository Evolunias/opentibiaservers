import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-ot-server-usa');
}

export default function WithScreenshotsOtServerUsaKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-ot-server-usa" />;
}
