import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-nostalther-open-tibia');
}

export default function WithScreenshotsNostaltherOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-nostalther-open-tibia" />;
}
