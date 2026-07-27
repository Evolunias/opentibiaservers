import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-tibiaorigins-open-tibia');
}

export default function WithScreenshotsTibiaoriginsOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-tibiaorigins-open-tibia" />;
}
