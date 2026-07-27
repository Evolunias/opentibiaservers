import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-luminera-tibia');
}

export default function WithScreenshotsLumineraTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-luminera-tibia" />;
}
