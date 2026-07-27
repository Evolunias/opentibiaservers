import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-tibiaorigins-tibia');
}

export default function WithScreenshotsTibiaoriginsTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-tibiaorigins-tibia" />;
}
