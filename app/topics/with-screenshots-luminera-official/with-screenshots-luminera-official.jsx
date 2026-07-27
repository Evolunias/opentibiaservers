import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-luminera-official');
}

export default function WithScreenshotsLumineraOfficialKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-luminera-official" />;
}
