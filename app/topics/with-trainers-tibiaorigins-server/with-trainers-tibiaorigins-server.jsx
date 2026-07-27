import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-trainers-tibiaorigins-server');
}

export default function WithTrainersTibiaoriginsServerKeywordPage() {
  return <StaticKeywordPage slug="with-trainers-tibiaorigins-server" />;
}
