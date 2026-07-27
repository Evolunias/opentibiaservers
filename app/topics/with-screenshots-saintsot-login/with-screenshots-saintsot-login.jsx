import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-saintsot-login');
}

export default function WithScreenshotsSaintsotLoginKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-saintsot-login" />;
}
