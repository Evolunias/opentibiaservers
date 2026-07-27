import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-saintsot-ots');
}

export default function WithScreenshotsSaintsotOtsKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-saintsot-ots" />;
}
