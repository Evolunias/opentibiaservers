import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-evolera-official');
}

export default function WithScreenshotsEvoleraOfficialKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-evolera-official" />;
}
