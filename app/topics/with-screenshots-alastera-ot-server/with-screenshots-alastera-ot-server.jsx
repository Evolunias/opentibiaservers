import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-alastera-ot-server');
}

export default function WithScreenshotsAlasteraOtServerKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-alastera-ot-server" />;
}
