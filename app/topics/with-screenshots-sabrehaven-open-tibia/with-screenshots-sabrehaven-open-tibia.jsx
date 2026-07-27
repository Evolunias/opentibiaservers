import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-sabrehaven-open-tibia');
}

export default function WithScreenshotsSabrehavenOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-sabrehaven-open-tibia" />;
}
