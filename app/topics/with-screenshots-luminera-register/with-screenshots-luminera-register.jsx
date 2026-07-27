import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-luminera-register');
}

export default function WithScreenshotsLumineraRegisterKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-luminera-register" />;
}
