import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-nostalther-tibia');
}

export default function WithScreenshotsNostaltherTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-nostalther-tibia" />;
}
