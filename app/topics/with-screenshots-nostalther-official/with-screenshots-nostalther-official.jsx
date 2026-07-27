import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-nostalther-official');
}

export default function WithScreenshotsNostaltherOfficialKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-nostalther-official" />;
}
