import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-ot-server-argentina');
}

export default function WithScreenshotsOtServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-ot-server-argentina" />;
}
