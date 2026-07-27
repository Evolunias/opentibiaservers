import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-saintsot-official');
}

export default function WithScreenshotsSaintsotOfficialKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-saintsot-official" />;
}
