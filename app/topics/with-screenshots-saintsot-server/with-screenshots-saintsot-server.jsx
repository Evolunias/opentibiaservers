import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-saintsot-server');
}

export default function WithScreenshotsSaintsotServerKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-saintsot-server" />;
}
