import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-saintsot-client');
}

export default function WithScreenshotsSaintsotClientKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-saintsot-client" />;
}
